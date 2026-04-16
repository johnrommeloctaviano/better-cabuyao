import Section from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { Text } from '../components/ui/Text';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/SEO';
import { Card, CardContent } from '@bettergov/kapwa/card';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  User,
  Building2,
  LayoutGrid,
} from 'lucide-react';
import { serviceCategories, governmentCategories } from '../data/yamlLoader';
import executiveData from '../../content/government/departments/executive.json';

const env = import.meta.env;

const About: React.FC = () => {
  const govName = env.VITE_GOVERNMENT_NAME as string;
  const region = env.VITE_REGION as string;
  const province = env.VITE_PROVINCE as string;
  const govType = env.VITE_GOVERNMENT_TYPE as string;
  const websiteUrl = env.VITE_WEBSITE_URL as string;
  const contactEmail = env.VITE_CONTACT_EMAIL as string;
  const contactPhone = env.VITE_CONTACT_PHONE as string;
  const facebookUrl = env.VITE_FACEBOOK_URL as string;
  const twitterUrl = env.VITE_TWITTER_URL as string;
  const instagramUrl = env.VITE_INSTAGRAM_URL as string;
  const youtubeUrl = env.VITE_YOUTUBE_URL as string;

  const { MAYOR, VICE_MAYOR, YEAR_ELECTED } = executiveData as {
    MAYOR: string;
    VICE_MAYOR: string;
    YEAR_ELECTED: string;
    [key: string]: string;
  };

  const socialLinks = [
    { label: 'Facebook', href: facebookUrl, icon: Facebook },
    { label: 'Twitter', href: twitterUrl, icon: Twitter },
    { label: 'Instagram', href: instagramUrl, icon: Instagram },
    { label: 'YouTube', href: youtubeUrl, icon: Youtube },
  ].filter(l => l.href);

  return (
    <>
      <SEO
        title="About"
        description={`About the ${govName} Portal — contact details, current administration, and available services.`}
        keywords={`${govName}, about, contact, ${province}, ${region}`}
      />
      <Section className="p-3 mb-12">
        <Breadcrumbs
          className="mb-8"
          items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />

        <Heading className="mb-2">{govName} Portal</Heading>
        <Text className="text-gray-500 mb-8">
          {govType} · {province} · {region}
        </Text>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact */}
          <Card>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="h-5 w-5 text-primary-600" />
                <h3 className="font-semibold text-gray-900">Contact</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                {contactPhone && (
                  <li className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
                    <span>{contactPhone}</span>
                  </li>
                )}
                {contactEmail && (
                  <li className="flex items-start gap-2">
                    <Mail className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-primary-600 hover:underline break-all"
                    >
                      {contactEmail}
                    </a>
                  </li>
                )}
                {websiteUrl && (
                  <li className="flex items-start gap-2">
                    <Globe className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline break-all"
                    >
                      {websiteUrl.replace(/^https?:\/\//, '')}
                    </a>
                  </li>
                )}
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
                  <span>
                    {govName}, {province}, {region}
                  </span>
                </li>
              </ul>
              {socialLinks.length > 0 && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Current Administration */}
          <Card>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary-600" />
                <h3 className="font-semibold text-gray-900">
                  Current Administration
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <span className="text-xs uppercase tracking-wide text-gray-400 block mb-0.5">
                    City Mayor
                  </span>
                  <span className="font-medium">{MAYOR}</span>
                </li>
                <li>
                  <span className="text-xs uppercase tracking-wide text-gray-400 block mb-0.5">
                    Vice Mayor
                  </span>
                  <span className="font-medium">{VICE_MAYOR}</span>
                </li>
                <li>
                  <span className="text-xs uppercase tracking-wide text-gray-400 block mb-0.5">
                    Term Started
                  </span>
                  <span className="font-medium">{YEAR_ELECTED}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Government */}
          <Card>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-5 w-5 text-primary-600" />
                <h3 className="font-semibold text-gray-900">Government</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {governmentCategories.categories.map(cat => (
                  <li key={cat.slug}>
                    <a
                      href={`/government/${cat.slug}`}
                      className="text-primary-600 hover:underline"
                    >
                      {cat.category}
                    </a>
                    {cat.description && (
                      <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">
                        {cat.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid className="h-5 w-5 text-primary-600" />
            <Heading level={3}>Available Services</Heading>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.categories.map(cat => (
              <a key={cat.slug} href={`/services/${cat.slug}`}>
                <Card
                  hoverable
                  className="h-full border-t-4 border-primary-500"
                >
                  <CardContent>
                    <h4 className="font-medium text-gray-900">
                      {cat.category}
                    </h4>
                    {cat.description && (
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {cat.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
