import Section from '../ui/Section';
import * as LucideIcons from 'lucide-react';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useTranslation } from '../../hooks/useTranslation';
import { Card, CardContent } from '@bettergov/kapwa/card';
import { Link } from 'react-router-dom';

import { serviceCategories } from '../../data/yamlLoader';

interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  category: string;
  slug: string;
  subcategories: Subcategory[];
  description: string;
  icon: string;
}

export default function ServicesSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t } = useTranslation();

  const getIcon = (iconName: string) => {
    const IconComponent = LucideIcons[
      iconName as keyof typeof LucideIcons
    ] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };

  const displayedCategories = serviceCategories.categories as Category[];

  return (
    <Section>
      <Heading level={2}>{title || t('services.title')}</Heading>
      <Text className="text-gray-600 mb-8">
        {description || t('services.description')}
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {displayedCategories.map(category => (
          <Link
            key={category.slug}
            to={`/services/${category.slug}`}
            className="group block"
          >
            <Card
              hoverable
              className="h-full transition-shadow"
            >
              <CardContent className="flex flex-col h-full p-5">
                <div className="bg-primary-50 text-primary-600 p-2.5 rounded-lg mb-4 self-start group-hover:bg-primary-100 transition-colors">
                  {getIcon(category.icon)}
                </div>

                <h3 className="text-base font-semibold mb-2 text-gray-900 leading-snug">
                  {category.category}
                </h3>

                <Text className="text-sm text-gray-500 leading-relaxed flex-1">
                  {category.description}
                </Text>

                <div className="mt-4 flex items-center gap-1 text-primary-600 text-sm font-semibold">
                  <span>Learn more</span>
                  <LucideIcons.ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
