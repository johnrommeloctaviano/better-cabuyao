import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Briefcase,
  CreditCard,
  Search,
} from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useState } from 'react';

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
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

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
        <div className="max-w-2xl animate-fade-in">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary-200 uppercase">
            {import.meta.env.VITE_GOVERNMENT_NAME}
          </p>
          <Heading className="text-white leading-tight mb-4">
            {t('hero.title')}
          </Heading>
          <Text size="lg" className="text-primary-100 mb-8 max-w-xl">
            {t('hero.subtitle')}
          </Text>

          {/* Search */}
          <form onSubmit={handleSearch} className="mb-8 max-w-lg">
            <div className="relative flex items-center">
              <Search className="absolute left-4 z-10 h-5 w-5 text-primary-300 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search services, departments…"
                aria-label="Search"
                className="w-full pl-11 pr-28 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-primary-200 text-sm backdrop-blur-sm focus:outline-none focus:bg-white/20 focus:border-white/60"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-1.5 rounded-lg bg-white text-primary-700 text-sm font-semibold hover:bg-primary-50 transition"
              >
                Search
              </button>
            </div>
          </form>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-12">
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
      </div>
    </div>
  );
}
