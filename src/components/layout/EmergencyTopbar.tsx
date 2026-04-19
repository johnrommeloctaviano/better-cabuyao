import React from 'react';

const hotlines = [
  { label: 'PNP Cabuyao', number: '0949 745 6048' },
  { label: 'CDRRMO', number: '0966 690 7561' },
  { label: 'BFP Cabuyao', number: '0932 741 1457' },
  { label: 'National Emergency', number: '911' },
];

const Separator = () => (
  <span className="mx-5 text-red-300 select-none" aria-hidden="true">
    •
  </span>
);

const HotlineItem = ({
  label,
  number,
}: {
  label: string;
  number: string | null;
}) => (
  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
    <span className="font-medium">{label}</span>
    {number && (
      <a
        href={`tel:${number.replace(/\s/g, '')}`}
        className="font-bold underline underline-offset-2 hover:text-red-200 transition-colors"
      >
        {number}
      </a>
    )}
  </span>
);

const EmergencyTopbar: React.FC = () => {
  return (
    <div
      className="bg-red-700 text-white text-xs py-1.5"
      role="complementary"
      aria-label="Emergency hotlines"
    >
      {/* Mobile: continuous left-to-right ticker */}
      <div className="md:hidden overflow-hidden" aria-hidden="true">
        <div
          className="flex"
          style={{ animation: 'marquee 24s linear infinite' }}
        >
          {/* Duplicate the list for a seamless loop */}
          {[...hotlines, ...hotlines].map((h, i) => (
            <React.Fragment key={i}>
              <HotlineItem label={h.label} number={h.number} />
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Screen-reader accessible list (always present, visually hidden on mobile) */}
      <ul className="sr-only md:not-sr-only md:hidden">
        {hotlines.map((h, i) => (
          <li key={i}>{h.label}</li>
        ))}
      </ul>

      {/* Desktop: static centered row */}
      <div className="hidden md:flex container mx-auto px-4 justify-center items-center gap-1 flex-wrap">
        {hotlines.map((h, i) => (
          <React.Fragment key={i}>
            <HotlineItem label={h.label} number={h.number} />
            {i < hotlines.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default EmergencyTopbar;
