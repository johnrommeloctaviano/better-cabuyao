import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { cn } from '../../lib/utils';

interface StatCard {
  value: string;
  label: string;
  description: string;
  dark?: boolean;
}

const statCards: StatCard[] = [
  {
    value: '2012',
    label: 'Year of Cityhood',
    description:
      'Cabuyao became the city on August 4, 2012 through Republic Act No. 10163, cementing its role as a major urban center in Laguna.',
    dark: true,
  },
  {
    value: '~420K+',
    label: 'Population',
    description:
      'One of the fastest-growing cities in CALABARZON, with an estimated 410,000–430,000 residents in 2026 and a growth rate of ~3.5–4.5% annually.',
    dark: false,
  },
  {
    value: '₱150B',
    label: 'Local Economy',
    description:
      'Estimated local GDP in 2026, driven by manufacturing, logistics, retail, and an emerging BPO sector — growing ~6–8% per year.',
    dark: true,
  },
  {
    value: '10,000+',
    label: 'Registered Businesses',
    description:
      'Home to 5+ major industrial parks and companies like Nestlé Philippines, Procter & Gamble, Toyota Motor Philippines, and San Miguel Corporation.',
    dark: false,
  },
  {
    value: '18',
    label: 'Barangays',
    description:
      'Cabuyao is composed of 18 barangays spanning Uno to Diez and named communities including Bigaa, Mamatid, Sala, Pulo, and Marinig.',
    dark: true,
  },
  {
    value: '~98%+',
    label: 'Literacy Rate',
    description:
      'Supported by 20+ public elementary schools, 10+ public high schools, 30+ private institutions, and universities including PUP and Pamantasan ng Cabuyao.',
    dark: false,
  },
  {
    value: '100%',
    label: 'Electricity Coverage',
    description:
      'Full electrification across all barangays, with ~85–90% water access and ~70–80% internet penetration as fiber roll-out continues.',
    dark: true,
  },
  {
    value: '₱3.5B',
    label: 'Annual City Budget',
    description:
      'Estimated annual budget for 2026 with 60–75% locally generated revenue from business taxes, real property taxes, and economic activity.',
    dark: false,
  },
];

export default function KeyStatistics() {
  return (
    <div>
      <Heading level={2}>Cabuyao City at a Glance</Heading>
      <Text className="text-gray-500 mb-8">
        Key figures and indicators that define Cabuyao&rsquo;s growth and place
        in CALABARZON as of 2026.
      </Text>

      <div className="grid grid-cols-1 gap-4">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className={cn(
              'rounded-xl p-6',
              card.dark
                ? 'bg-primary-800 text-white'
                : 'bg-white border border-gray-200'
            )}
          >
            <p
              className={cn(
                'text-4xl font-extrabold mb-1',
                card.dark ? 'text-white' : 'text-primary-700'
              )}
            >
              {card.value}
            </p>
            <p
              className={cn(
                'text-sm font-bold mb-2',
                card.dark ? 'text-primary-200' : 'text-gray-900'
              )}
            >
              {card.label}
            </p>
            <p
              className={cn(
                'text-sm leading-relaxed',
                card.dark ? 'text-primary-100' : 'text-gray-500'
              )}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
