import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Briefcase, CreditCard } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { SearchCard } from '../ui/SearchCard';

const quickLinks = [
  {
    key: 'hero.nationalId',
    icon: CreditCard,
    href: '/services',
  },
  {
    key: 'hero.birthCertificate',
    icon: FileText,
    href: '/services',
  },
  {
    key: 'hero.businessRegistration',
    icon: Briefcase,
    href: '/services/business',
  },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 animate-fade-in">
          {/* Left column — branding, CTAs, quick links */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary-200 uppercase">
              {import.meta.env.VITE_GOVERNMENT_NAME}
            </p>
            <Heading className="text-white leading-tight mb-4">
              {t('hero.title')}
            </Heading>
            <Text size="lg" className="text-primary-100 mb-8 max-w-xl">
              {t('hero.subtitle')}
            </Text>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 shadow-sm transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t('services.viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/government"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t('navbar.government')}
              </Link>
            </div>

            {/* Quick-access links */}
            <div>
              <p className="mb-3 text-xs font-medium tracking-wide text-primary-200 uppercase">
                Quick access
              </p>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map(({ key, icon: Icon, href }) => (
                  <Link
                    key={key}
                    to={href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t(key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — search card */}
          <div className="flex items-stretch lg:justify-end">
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}
