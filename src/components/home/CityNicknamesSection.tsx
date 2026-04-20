const nicknames = [
  { text: 'The City of Modern Factories', size: 'sm' },
  { text: 'The Enterprise City of the Philippines', size: 'xl' },
  { text: 'Next Wave City', size: 'lg' },
  { text: 'The Home of the Legendary Kampanang Ginto', size: 'md' },
  { text: 'Golden Bell City', size: 'lg' },
] as const;

const sizeClasses = {
  sm: 'text-lg md:text-xl font-medium tracking-wide',
  md: 'text-xl md:text-2xl font-semibold tracking-wide',
  lg: 'text-3xl md:text-4xl font-bold tracking-tight',
  xl: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none',
};

export default function CityNicknamesSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Label */}
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 mb-10">
          Cabuyao City &mdash; Also Known As
        </p>

        {/* Nicknames stacked with varied sizing */}
        <div className="space-y-6 border-t border-gray-800 pt-10">
          {nicknames.map((n, i) => (
            <div
              key={i}
              className="flex items-baseline gap-4 border-b border-gray-800 pb-6"
            >
              <span className="text-xs font-mono text-gray-600 w-5 shrink-0 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p
                className={`${sizeClasses[n.size]} font-serif italic text-white leading-tight`}
              >
                &ldquo;{n.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Motto */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
              City Motto
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-serif font-bold text-white">
              One Cabuyao, One Vision
            </p>
            <p className="text-base text-gray-400 font-medium tracking-wide">
              Isang Kabuyaw, Isang Pananaw
            </p>
            <p className="text-sm text-gray-500 tracking-widest uppercase mt-3">
              Bagong Cabuyao &middot; New Kabuyaw
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
