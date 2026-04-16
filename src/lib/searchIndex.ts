import { serviceCategories, governmentCategories } from '../data/yamlLoader';

export interface SearchEntry {
  title: string;
  description: string;
  href: string;
  categorySlug: string;
  categoryLabel: string;
  type: 'service' | 'government';
  slug: string;
  rawContent: string;
}

type LazyModule = () => Promise<string>;
type GlobResult = Record<string, LazyModule>;

const serviceModules = import.meta.glob<string>(
  '../../content/services/**/*.md',
  { query: '?raw', import: 'default' }
) as GlobResult;

const governmentModules = import.meta.glob<string>(
  '../../content/government/**/*.md',
  { query: '?raw', import: 'default' }
) as GlobResult;

function extractTitleAndDescription(content: string): {
  title: string;
  description: string;
} {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const descriptionMatch = content.match(/^#\s+.+$\n\n(.+?)(?:\n\n|$)/s);
  const description = descriptionMatch
    ? descriptionMatch[1].replace(/^>\s*/, '').trim()
    : '';

  return { title, description };
}

function buildCategoryMap(
  data: typeof serviceCategories | typeof governmentCategories
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const cat of data.categories) {
    map[cat.slug] = cat.category;
  }
  return map;
}

let cachedIndex: SearchEntry[] | null = null;

async function processModules(
  modules: GlobResult,
  type: 'service' | 'government',
  catMap: Record<string, string>
): Promise<SearchEntry[]> {
  const entries: SearchEntry[] = [];
  const baseHref = type === 'service' ? '/services' : '/government';

  await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      try {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const slug = fileName.replace(/\.md$/, '');
        const categorySlug = parts[parts.length - 2];
        const href = `${baseHref}/${categorySlug}/${slug}`;

        const rawContent = await loader();
        const { title, description } = extractTitleAndDescription(rawContent);

        entries.push({
          title: title || slug,
          description,
          href,
          categorySlug,
          categoryLabel: catMap[categorySlug] ?? categorySlug,
          type,
          slug,
          rawContent,
        });
      } catch {
        // skip unloadable entries
      }
    })
  );

  return entries;
}

export async function buildSearchIndex(): Promise<SearchEntry[]> {
  if (cachedIndex) return cachedIndex;

  const serviceCatMap = buildCategoryMap(serviceCategories);
  const govCatMap = buildCategoryMap(governmentCategories);

  const [serviceEntries, govEntries] = await Promise.all([
    processModules(serviceModules, 'service', serviceCatMap),
    processModules(governmentModules, 'government', govCatMap),
  ]);

  cachedIndex = [...serviceEntries, ...govEntries];
  return cachedIndex;
}

export function searchEntries(
  entries: SearchEntry[],
  query: string
): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return entries.filter(
    e =>
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.categoryLabel.toLowerCase().includes(q) ||
      e.rawContent.toLowerCase().includes(q)
  );
}
