import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  Users,
  TrendingUp,
  Factory,
  GraduationCap,
  HeartPulse,
  Wifi,
  MapPin,
  Landmark,
} from 'lucide-react';

interface StatGroup {
  label: string;
  icon: React.ReactNode;
  accent: string;
  stats: { key: string; value: string }[];
}

const statGroups: StatGroup[] = [
  {
    label: 'Population',
    icon: <Users className="h-5 w-5" />,
    accent: 'bg-sky-100 text-sky-700 border-sky-300',
    stats: [
      { key: 'Est. Population (2026)', value: '~410,000 – 430,000' },
      { key: 'Annual Growth Rate', value: '~3.5% – 4.5%' },
      { key: 'Median Age', value: '~24 – 26 years' },
      { key: 'Total Barangays', value: '18' },
    ],
  },
  {
    label: 'Economy',
    icon: <TrendingUp className="h-5 w-5" />,
    accent: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    stats: [
      { key: 'Income Class', value: '1st Class Component City' },
      { key: 'Est. Local GDP (2026)', value: '₱120B – ₱150B' },
      { key: 'GDP Growth', value: '~6% – 8% / year' },
      { key: 'Registered Businesses', value: '10,000+' },
    ],
  },
  {
    label: 'Industry',
    icon: <Factory className="h-5 w-5" />,
    accent: 'bg-amber-100 text-amber-700 border-amber-300',
    stats: [
      { key: 'Industrial Parks', value: '5+ major zones' },
      { key: 'Labor Force Participation', value: '~60% – 65%' },
      { key: 'Unemployment Rate', value: '~4% – 6%' },
      { key: 'Key Employers', value: 'Nestlé, P&G, Toyota, SMC' },
    ],
  },
  {
    label: 'Education',
    icon: <GraduationCap className="h-5 w-5" />,
    accent: 'bg-violet-100 text-violet-700 border-violet-300',
    stats: [
      { key: 'Public Elementary Schools', value: '20+' },
      { key: 'Public High Schools', value: '10+' },
      { key: 'Private Schools', value: '30+' },
      { key: 'Literacy Rate', value: '~98%+' },
    ],
  },
  {
    label: 'Health',
    icon: <HeartPulse className="h-5 w-5" />,
    accent: 'bg-rose-100 text-rose-700 border-rose-300',
    stats: [
      { key: 'Life Expectancy', value: '~70 – 73 years' },
      { key: 'PhilHealth Coverage', value: '~85%+' },
      { key: 'Private Hospitals', value: '3 – 5 major' },
      { key: 'Infant Mortality', value: 'Declining (~10–15 / 1k)' },
    ],
  },
  {
    label: 'Infrastructure',
    icon: <Wifi className="h-5 w-5" />,
    accent: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    stats: [
      { key: 'Electricity Coverage', value: '~100%' },
      { key: 'Water Access', value: '~85% – 90%' },
      { key: 'Internet Penetration', value: '~70% – 80%' },
      { key: 'Road Network', value: '~250 – 300 km' },
    ],
  },
  {
    label: 'Governance',
    icon: <Landmark className="h-5 w-5" />,
    accent: 'bg-teal-100 text-teal-700 border-teal-300',
    stats: [
      { key: 'Annual City Budget (2026)', value: '₱2.5B – ₱3.5B' },
      { key: 'Locally Generated Revenue', value: '~60% – 75%' },
      { key: 'Cityhood Date', value: 'August 4, 2012' },
      { key: 'Legal Basis', value: 'Republic Act No. 10163' },
    ],
  },
  {
    label: 'Strategic Position',
    icon: <MapPin className="h-5 w-5" />,
    accent: 'bg-orange-100 text-orange-700 border-orange-300',
    stats: [
      { key: 'Region', value: 'CALABARZON (Region IV-A)' },
      { key: 'Province', value: 'Laguna' },
      { key: 'Est. Population by 2030', value: '450k – 500k' },
      { key: 'City Identity', value: 'Enterprise City of the PH' },
    ],
  },
];

export default function KeyStatistics() {
  return (
    <div>
      <Heading level={2}>Cabuyao City at a Glance</Heading>
      <Text className="text-gray-500 mb-8">
        Key figures and indicators that define Cabuyao&rsquo;s growth
        and place in CALABARZON as of 2026.
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statGroups.map((group, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${group.accent}`}
                >
                  {group.icon}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wide ${group.accent.split(' ')[1]}`}>
                  {group.label}
                </span>
              </div>

              {/* Stats */}
              <dl className="space-y-1.5">
                {group.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between gap-2 text-sm">
                    <dt className="text-gray-500 shrink-0">{stat.key}</dt>
                    <dd className="font-medium text-gray-900 text-right">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
