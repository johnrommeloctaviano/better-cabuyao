import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Search as SearchIcon, X } from 'lucide-react';
import {
  buildSearchIndex,
  searchEntries,
  type SearchEntry,
} from '../lib/searchIndex';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [index, setIndex] = useState<SearchEntry[]>([]);
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buildSearchIndex().then(entries => {
      setIndex(entries);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setResults(searchEntries(index, query));
  }, [index, query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setSearchParams(val ? { q: val } : {}, { replace: true });
  };

  const handleClear = () => {
    setQuery('');
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      <SEO
        title="Search"
        description={`Search services and government information for ${import.meta.env.VITE_GOVERNMENT_NAME}.`}
        keywords="search, services, government, local government"
      />
      <Section className="p-3 mb-12">
        <Breadcrumbs
          className="mb-8"
          items={[{ label: 'Home', href: '/' }, { label: 'Search' }]}
        />

        <Heading className="mb-6">Search</Heading>

        <div className="relative mb-8 max-w-xl">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={handleChange}
            placeholder="Search services, departments…"
            aria-label="Search"
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          {query && (
            <button
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {loading && (
          <Text className="text-gray-500">Loading search index…</Text>
        )}

        {!loading && !query && (
          <Text className="text-gray-400 text-sm">
            Start typing to search across all services and government
            information.
          </Text>
        )}

        {!loading && query && results.length === 0 && (
          <Text className="text-gray-500">
            No results found for &ldquo;{query}&rdquo;.
          </Text>
        )}

        {!loading && query && results.length > 0 && (
          <>
            <Text className="text-sm text-gray-500 mb-4">
              {results.length} result{results.length !== 1 ? 's' : ''} for
              &ldquo;{query}&rdquo;
            </Text>
            <div className="space-y-3">
              {results.map(entry => (
                <Link key={entry.href} to={entry.href}>
                  <Card hoverable className="mb-3">
                    <CardContent>
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h4 className="font-medium text-gray-900">
                            {entry.title}
                          </h4>
                          {entry.description && (
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {entry.description}
                            </p>
                          )}
                        </div>
                        <span className="shrink-0 inline-block px-2 py-1 text-xs font-medium rounded-sm bg-gray-100 text-gray-600 whitespace-nowrap">
                          {entry.categoryLabel}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
};

export default Search;
