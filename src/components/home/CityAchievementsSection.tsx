import {
  Landmark,
  Factory,
  TrendingUp,
  Building2,
  GraduationCap,
  Trophy,
  Leaf,
  HeartPulse,
  Star,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

type Achievement = {
  id: number;
  label: string;
  title: string;
  insight: string;
  highlights: string[];
  icon: ComponentType<LucideProps>;
  src?: string;
  cardBg: string;
  placeholderBg: string;
  textColor: string;
};

const achievements: Achievement[] = [
  {
    id: 1,
    label: 'Milestone',
    title: 'From Historic Settlement to Chartered City',
    insight: 'Founded 1571 · Chartered city since 2012',
    highlights: [
      'Founded in 1571 as one of the earliest Spanish-era settlements in Laguna',
      'Officially became a city through Republic Act No. 10163 (2012)',
      'One of the youngest cities in Laguna—yet rapidly competitive',
    ],
    icon: Landmark,
    src: 'https://c1.staticflickr.com/7/6205/6129470702_72f7747e70_b.jpg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 2,
    label: 'Economy',
    title: 'Rise as an Industrial & Economic Powerhouse',
    insight: '"Enterprise City of the Philippines"',
    highlights: [
      'Hosts Nestlé, Procter & Gamble, and Honda Philippines',
      'One of the key economic engines of CALABARZON',
      'Known as the "City of Modern Factories"',
    ],
    icon: Factory,
    src: 'https://sciencepark.com.ph/wp-content/uploads/2023/02/light-industry-park-i-slide-8.jpg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 3,
    label: 'Finance',
    title: 'Strong Revenue Growth & Financial Independence',
    insight: 'Consistently among the top income cities in Laguna',
    highlights: [
      'Rapid revenue growth post-cityhood (2012 onward)',
      'Improved internal revenue generation beyond national allotment',
      'Funds infrastructure, education, and social services locally',
    ],
    icon: TrendingUp,
    src: 'https://sciencepark.com.ph/wp-content/uploads/2023/02/light-industry-park-i-slide-9.jpg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 4,
    label: 'Infrastructure',
    title: 'Rapid Urbanization & Infrastructure Development',
    insight: 'Strategic gateway along the South Luzon Expressway',
    highlights: [
      'Strategic location adjacent to SLEX',
      'Growth of residential subdivisions and commercial centers',
      'Key residential + industrial hybrid city in CALABARZON',
    ],
    icon: Building2,
    src: 'https://i.ytimg.com/vi/jcxqFoG53KM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBKMx_Hk2tHXvh-bzbfvKAxXEpvrg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 5,
    label: 'Education',
    title: 'Expansion of Education & Talent Development',
    insight: 'Building a skilled workforce for industry',
    highlights: [
      'Home to Pamantasan ng Cabuyao (PKC)',
      'Strengthened public school systems across barangays',
      'Specialized institutions like CABS for student-athletes',
    ],
    icon: GraduationCap,
    src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/PnC_Bagong_Cabuyao_Hall.jpg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 6,
    label: 'Sports',
    title: 'Sports Development & Youth Programs',
    insight: 'A growing sports hub in Laguna',
    highlights: [
      'Athlete development through Cabuyao Athletes Basic School (CABS)',
      'Active participation in regional and national competitions',
      'Investment in youth and grassroots sports programs',
    ],
    icon: Trophy,
    src: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/617142008_847516381451559_1934714399589921261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=KV_dMfjEGdYQ7kNvwF7drSO&_nc_oc=AdoozuP5MhEOvjj-O0rN8hmNBhVFp1qC9BOxoqnE91YHb3oik7tRpkYR5I-XI9G7p94&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=2R37m7sC31bBhyDHwLkFeg&_nc_ss=7a3a8&oh=00_Af09sohuFP7RiTJaMwtaiK-EVvu9TojOg09XFBwCQO2m7A&oe=69EB8B5B',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 7,
    label: 'Environment',
    title: 'Environmental & Waste Management Efforts',
    insight: 'Structured steps toward sustainable urban management',
    highlights: [
      'Materials Recovery Facilities (MRFs) in barangays',
      'Waste segregation and clean environment programs',
      'Active participation in regional environmental initiatives',
    ],
    icon: Leaf,
    src: 'https://sciencepark.com.ph/wp-content/uploads/2021/08/Waste_Water_Facility_LISPI.jpg',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 8,
    label: 'Health & Welfare',
    title: 'Expansion of Health & Social Services',
    insight: 'Improved healthcare access for a growing population',
    highlights: [
      'Strengthened barangay health centers across the city',
      'Expanded access to public healthcare services',
      'Medical outreach and social welfare programs',
    ],
    icon: HeartPulse,
    src: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/489871146_122104733456827410_2743896497349822386_n.png?_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=UsmuEzMqH30Q7kNvwFkV5-9&_nc_oc=AdpVKAuaiW4PvDvV0vTz4BF1j1OMY0onbErpm7wa1K_QkXQz07E0mSV9JHS0vmjw_Rw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=Ziy6aMlebb8XPeN55ZksTw&_nc_ss=7a3a8&oh=00_Af3pkswXSg63c_U1cA-rWc2ge1XKeoVApBJqy4OJ_j38Xg&oe=69EB9106',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
  {
    id: 9,
    label: 'Recognition',
    title: 'Competitive Position in Laguna & the Region',
    insight: '"Next Wave City" — a serious regional player',
    highlights: [
      'Part of the "Next Wave Cities" (emerging urban centers)',
      'Competing alongside Santa Rosa and Calamba as growth hubs',
      'Recognized as a strategic growth corridor in CALABARZON',
    ],
    icon: Star,
    src: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/512667384_1249590556950507_2122271926462101630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=b895b5&_nc_ohc=ZPB_OA559A8Q7kNvwEt3514&_nc_oc=AdoUfef793xH21hwCNk8RDgYR2yvsDKMV00z10Z-WLAGPsAcizBTyXVYn41HElvOhTw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=KzuC3QWGxSaPNx9alkcz2w&_nc_ss=7a3a8&oh=00_Af2vXhGA7jAlT1Pt7EEwqG-D-fduf-nV6f2IesesGyBR0A&oe=69EB7ACA',
    cardBg: 'bg-white',
    placeholderBg: 'bg-gray-100',
    textColor: 'text-gray-900',
  },
];

type ImageAreaProps = {
  src?: string;
  alt: string;
  icon: ComponentType<LucideProps>;
  placeholderBg: string;
  className?: string;
};

function ImageArea({ src, alt, icon: Icon, placeholderBg, className = '' }: ImageAreaProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden shrink-0 ${className}`}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden shrink-0 ${placeholderBg} ${className}`}
      aria-hidden="true"
    >
      {/* Decorative grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <Icon className="relative z-10 size-12 opacity-20" strokeWidth={1} />

      <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-[0.2em] opacity-25 select-none">
        Image placeholder
      </span>
    </div>
  );
}

type CardProps = {
  item: Achievement;
  className?: string;
  imageHeight?: string;
};

function AchievementCard({
  item,
  className = '',
  imageHeight = 'h-56',
}: CardProps) {
  const { icon, src, cardBg, placeholderBg, textColor, title } = item;

  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col ${cardBg} ${textColor} ${className}`}
    >
      <ImageArea
        src={src}
        alt={title}
        icon={icon}
        placeholderBg={placeholderBg}
        className={imageHeight}
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] opacity-40">
            {item.label}
          </span>
          <h3 className="mt-1 text-2xl font-bold font-serif leading-snug">
            {item.title}
          </h3>
          <p className="mt-1 text-lg italic opacity-60 font-serif">
            {item.insight}
          </p>
        </div>

        <ul className="space-y-2">
          {item.highlights.map(h => (
            <li
              key={h}
              className="flex items-start gap-2 text-base opacity-70 leading-snug"
            >
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-current opacity-60" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CityAchievementsSection() {
  const [
    milestone,
    economy,
    finance,
    infrastructure,
    education,
    sports,
    environment,
    health,
    recognition,
  ] = achievements;

  return (
    <section className="py-20 px-2.5 bg-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-gray-400 mb-3">
            Cabuyao City &mdash; Notable Achievements
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-serif tracking-tight text-gray-900">
            City Wonders
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Milestones, industries, and programs that define Cabuyao as one of
            Laguna&rsquo;s most competitive and rapidly growing cities.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Row 1: [col-span-2] + [col-span-1] + [col-span-1] */}
          <AchievementCard
            item={milestone}
            className="lg:col-span-2"
            imageHeight="h-92"
          />
          <AchievementCard item={economy} imageHeight="h-64" />
          <AchievementCard item={finance} imageHeight="h-54" />

          {/* Row 2 */}
          <AchievementCard item={infrastructure} imageHeight="h-46" />
          <AchievementCard item={education} imageHeight="h-48" />
          <AchievementCard item={sports} imageHeight="h-48" />
          <AchievementCard item={environment} imageHeight="h-48" />

          {/* Row 3: wide + narrow */}
          <AchievementCard
            item={health}
            className="lg:col-span-2"
            imageHeight="h-48"
          />
          <AchievementCard
            item={recognition}
            className="sm:col-span-2"
            imageHeight="h-48"
          />
        </div>
      </div>
    </section>
  );
}
