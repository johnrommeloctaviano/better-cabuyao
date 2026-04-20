import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Wonder = {
  name: string;
  category: string;
  highlights: string[];
};

const wonders: Wonder[] = [
  {
    name: 'St. Polycarp Parish Church',
    category: 'Historical & Cultural',
    highlights: [
      'One of the oldest churches in Laguna (est. 1700s)',
      'Central to Cabuyao\'s identity and religious life',
      'Located right in the poblacion area',
      'Hosts major events like fiestas and processions',
    ],
  },
  {
    name: 'Cabuyao Town Plaza & Rizal Monument',
    category: 'Historical & Cultural',
    highlights: [
      'Public gathering space beside the church',
      'Features a monument of José Rizal',
      'Good for casual walks and community events',
    ],
  },
  {
    name: 'Cabuyao City Hall & Heritage Area',
    category: 'Historical & Cultural',
    highlights: [
      'Government center with modern infrastructure',
      "Area reflects the city's transition from town to urban hub",
    ],
  },
  {
    name: 'Laguna de Bay Lakeshore',
    category: 'Nature & Outdoor',
    highlights: [
      'Largest lake in the Philippines',
      'Scenic sunrise and sunset views',
      'Local fishing communities and lakeside life',
    ],
  },
  {
    name: 'Pulo-Diezmo Road Industrial Strip',
    category: 'Modern Attractions',
    highlights: [
      '"The Enterprise City of the Philippines"',
      'Home to major companies like Nestlé Philippines',
      'Showcases Cabuyao\'s industrial significance',
    ],
  },
  {
    name: 'Cabuyao City Fiesta (Feast of St. Polycarp)',
    category: 'Festivals & Events',
    highlights: [
      'Held annually every January',
      'Street dancing, parades, and religious activities',
      'Best time to experience local culture',
    ],
  },
];

function WonderCard({ wonder }: { wonder: Wonder }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group">
      {/* Placeholder image background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-200 opacity-60"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">
          {wonder.category}
        </span>
        <h3 className="mt-1 text-2xl md:text-3xl font-bold leading-snug">
          {wonder.name}
        </h3>
        {/* Highlights — revealed on hover */}
        <ul className="mt-3 space-y-1 max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {wonder.highlights.map(h => (
            <li key={h} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-white/50" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CityWondersSection() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-3">
            Cabuyao City &mdash; Notable Wonders
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-gray-900">
            Discover Cabuyao
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl">
            Historical landmarks, natural escapes, and vibrant festivals that
            make Cabuyao City worth exploring.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {wonders.map(wonder => (
              <CarouselItem
                key={wonder.name}
                className="pl-4"
              >
                <WonderCard wonder={wonder} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 size-9" />
            <CarouselNext className="static translate-y-0 size-9" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
