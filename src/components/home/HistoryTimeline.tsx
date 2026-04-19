import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  Waves,
  Church,
  Swords,
  BookOpen,
  Factory,
  Building2,
} from 'lucide-react';

interface TimelineEntry {
  period: string;
  title: string;
  highlights: string[];
  icon: React.ReactNode;
  accent: string;
}

const timelineEntries: TimelineEntry[] = [
  {
    period: 'Before 1571',
    title: 'Pre-Colonial Era',
    highlights: [
      'Thriving lakeshore community along Laguna de Bay',
      'Tagalog-speaking settlers with barangay governance under local datus',
      'Economy rooted in fishing, rice farming, and barter trade',
    ],
    icon: <Waves className="h-5 w-5" />,
    accent: 'bg-sky-100 text-sky-700 border-sky-300',
  },
  {
    period: '1571 – 1898',
    title: 'Spanish Colonial Period',
    highlights: [
      'Formally established in 1571 — the same year Manila was founded',
      'Originally called "Tabuko"; later renamed Cabuyao',
      'San Vicente Ferrer Parish Church built — oldest in Laguna',
      'Governed as a pueblo; Catholic traditions and fiestas introduced',
    ],
    icon: <Church className="h-5 w-5" />,
    accent: 'bg-amber-100 text-amber-700 border-amber-300',
  },
  {
    period: '1896 – 1946',
    title: 'Revolution & American Period',
    highlights: [
      'Residents joined the Katipunan during the Philippine Revolution',
      'Philippines ceded to the U.S. via the Treaty of Paris (1898)',
      'Public school system, English language, and local roads introduced',
      'Governance modernized under American administration',
    ],
    icon: <Swords className="h-5 w-5" />,
    accent: 'bg-red-100 text-red-700 border-red-300',
  },
  {
    period: '1942 – 1945',
    title: 'Japanese Occupation',
    highlights: [
      'Cabuyao occupied by Japanese forces during World War II',
      'Residents endured food shortages and violence',
      'Local guerrilla groups and civilian resistance operated across Laguna',
      'Liberation arrived in 1945 with Allied forces',
    ],
    icon: <BookOpen className="h-5 w-5" />,
    accent: 'bg-stone-100 text-stone-700 border-stone-300',
  },
  {
    period: '1946 – 2011',
    title: 'Municipality & Industrial Growth',
    highlights: [
      'Post-war reconstruction; agriculture remained the main livelihood',
      'Proximity to Metro Manila drove rapid industrialization from the 1970s',
      'Industrial parks and manufacturing firms established',
      'Earned names: "Enterprise City" and "Next Wave City"',
    ],
    icon: <Factory className="h-5 w-5" />,
    accent: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  },
  {
    period: '2012 – Present',
    title: 'Cityhood & Modern Era',
    highlights: [
      'Officially became a city on August 4, 2012 via Republic Act No. 10163',
      'Home to Nestlé Philippines, Procter & Gamble, and thousands more',
      'Residential subdivisions, commercial centers, and improved transport',
      'Transitioning into a modern, digitally-connected city',
    ],
    icon: <Building2 className="h-5 w-5" />,
    accent: 'bg-primary-100 text-primary-700 border-primary-300',
  },
];

export default function HistoryTimeline() {
  return (
    <div>
      <Heading level={2}>History of Cabuyao City</Heading>
      <Text className="text-gray-500 mb-8">
        From a lakeside fishing village to one of CALABARZON&rsquo;s
        fastest-growing cities — centuries of resilience and progress.
      </Text>

      <ol className="relative border-l-2 border-primary-200 ml-4">
          {timelineEntries.map((entry, idx) => (
            <li key={idx} className="mb-8 ml-8 last:mb-0">
              {/* Circle node */}
              <span
                className={`absolute -left-[1.15rem] flex h-9 w-9 items-center justify-center rounded-full border-2 ${entry.accent}`}
              >
                {entry.icon}
              </span>

              <Card>
                <CardContent className="p-5">
                  {/* Period badge */}
                  <span
                    className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${entry.accent}`}
                  >
                    {entry.period}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-3">
                    {entry.title}
                  </h3>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {entry.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
    </div>
  );
}
