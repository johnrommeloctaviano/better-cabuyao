import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
} from 'lucide-react';
import { footerNavigation } from '../../data/navigation';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const getSocialIcon = (label: string) => {
    switch (label) {
      case 'Facebook':
        return <Facebook className="h-5 w-5" />;
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      case 'YouTube':
        return <Youtube className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/cabuyao-city-seal.png"
                alt="Cabuyao City official seal"
                className="h-16 w-16 mr-2"
              />
              <div>
                <div className="font-bold">{t('site_name')}</div>
                <div className="text-xs text-gray-400">Cabuyao City, Laguna, Philippines</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              BetterCabuyao.Org is a community-ran portal for Cabuyao City,
              Laguna. Helping residents access government services, news, and
              local resources.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.socialLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(link.label)}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <img
                src="/better-gov-logo.svg"
                alt="BetterGov logo"
                className="h-16"
              />
            </div>
          </div>

          {footerNavigation.mainSections.map(section => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BetterCabuyao.Org | MIT | CC BY 4.0 | Built by John Rommel Octaviano
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="https://bettergov.ph/join-us"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
              <a
                href="https://bettergov.ph/about"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                About BetterGov
              </a>
              <a
                href="https://www.gov.ph"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Gov.ph
              </a>
              <a
                href="https://bettergov.ph/philippines/hotlines"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hotlines
              </a>
              {/* <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Use
              </a> */}
              <Link
                to="https://github.com/bettergovph/bettergov"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Contribute at GitHub
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
              <a
                href="/accessibility"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
