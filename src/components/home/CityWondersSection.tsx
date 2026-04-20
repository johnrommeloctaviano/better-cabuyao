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
  src?: string;
  highlights: string[];
};

const wonders: Wonder[] = [
  {
    name: 'St. Polycarp Parish Church',
    category: 'Historical & Cultural',
    src: "https://senpolikarpizmir.com/wp-content/uploads/2024/08/452669520_1199391297735960_1464543916401167472_n-1-scaled.jpg",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cabuyao_Town_Plaza%2C_Laguna%2C_Jul_2024_%281%29.jpg/1920px-Cabuyao_Town_Plaza%2C_Laguna%2C_Jul_2024_%281%29.jpg?_=20240706140657",
    highlights: [
      'Public gathering space beside the church',
      'Features a monument of José Rizal',
      'Good for casual walks and community events',
    ],
  },
  {
    name: 'Cabuyao City Hall & Heritage Area',
    category: 'Historical & Cultural',
    src: "https://www.crownasia.com.ph/wp-content/uploads/2023/08/Cabuyao-town-plaza-and-city-proper.webp",
    highlights: [
      'Government center with modern infrastructure',
      "Area reflects the city's transition from town to urban hub",
    ],
  },
  {
    name: 'Laguna de Bay Lakeshore',
    category: 'Nature & Outdoor',
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/2790Barangays_Cabuyao%2C_Laguna_Roads_Landmarks_03.jpg",
    highlights: [
      'Largest lake in the Philippines',
      'Scenic sunrise and sunset views',
      'Local fishing communities and lakeside life',
    ],
  },
  {
    name: 'Cabuyao City Fiesta (Feast of St. Polycarp)',
    category: 'Festivals & Events',
    src: "https://businessmirror.com.ph/wp-content/uploads/2025/08/indakan.jpg",
    highlights: [
      'Held annually every January',
      'Street dancing, parades, and religious activities',
      'Best time to experience local culture',
    ],
  },
  {
    name: 'Centro Mall Cabuyao',
    category: 'Shopping & Commerce',
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/1220Barangays_Cabuyao%2C_Laguna_Roads_Landmarks_22.jpg",
    highlights: [
      'OG mall located near the town proper',
      'Surrounded by banks, fast food, and local shops',
    ],
  },
  {
    name: 'Light Industry and Science Park I (LISP I)',
    category: 'Modern Attractions',
    src: "https://sciencepark.com.ph/wp-content/uploads/2023/02/light-industry-park-i-slide-5.jpg",
    highlights: [
      'One of the most important economic zones',
      'Home to multinational companies',
      'Huge part of daily commuter traffic',
    ],
  },
  {
    name: 'Nestlé Cabuyao Factory Area',
    category: 'Modern Attractions',
    src: "https://www.domain-b.com/Uploads/Images/5866a067-1252-4e83-87e2-82273777fdaf-Nestle-FINAL.jpg",
    highlights: [
      'Major employer in the city',
      "Symbol of Cabuyao's industrial identity",
    ],
  },
  {
    name: 'Cabuyao Athletes Basic School (CABS)',
    category: 'Education & Sports',
    src: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/470573147_1111543070336593_3299048019042525369_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=6VT7gufdoIYQ7kNvwEQl_b9&_nc_oc=Adoq8BJUO2NDxwaFDJkG5k-TSUdiZKEfLCjeYtDC9oCGp-L-gw2FqejTYSHYmWdF-tg&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=u8rnZXogJfCSvrFOxNUn9Q&_nc_ss=7a3a8&oh=00_Af3XrE5sEnvLTe_hcg7g5pVAeVBZgJh7NgRtOgJsDAXcQA&oe=69EB5E0C",
    highlights: [
      'A specialized public school focused on student-athletes',
      'Combines academic education with athletic training',
    ],
  },
  {
    name: 'WalterMart Cabuyao',
    category: 'Shopping & Commerce',
    src: 'https://www.waltermartdelivery.com.ph/wp-content/uploads/2017/09/Cabuyao-1.jpg',
    highlights: [
      'A mid-sized community mall in Cabuyao',
      'More practical and less crowded than bigger malls',
      'Focused on everyday needs rather than big entertainment',
    ],
  },
  {
    name: 'Lazada eLogistics Hub',
    category: 'Modern Attractions',
    src: "https://upload.wikimedia.org/wikipedia/commons/1/15/Lazada_Laguna_warehouse.jpg",
    highlights: [
      'Key logistics node for nationwide delivery across Luzon',
      'Thousands of jobs for warehouse staff, riders, and operations',
      'Supports the rise of e-commerce and digital economy',
    ],
  },
];

function WonderCard({ wonder }: { wonder: Wonder }) {
  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden group">
      {/* Image or placeholder */}
      {wonder.src ? (
        <img
          src={wonder.src}
          alt={wonder.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
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
      )}

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
        <ul className="mt-3 space-y-1">
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
      <div className="container mx-auto max-w-7xl">
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
