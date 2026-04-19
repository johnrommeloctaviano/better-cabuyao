import { Card, CardContent } from '@bettergov/kapwa/card';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { Heading } from '../ui/Heading';
import executiveData from '../../../content/government/departments/executive.json';

const { MAYOR, VICE_MAYOR, HONORIFIC_TITLE, YEAR_ELECTED } =
  executiveData as {
    MAYOR: string;
    VICE_MAYOR: string;
    HONORIFIC_TITLE: string;
    YEAR_ELECTED: string;
    [key: string]: string;
  };

interface Leader {
  title: string;
  name: string;
  role: string;
  responsibilities: string[];
}

const leaders: Leader[] = [
  {
    title: 'City Mayor',
    name: MAYOR,
    role: 'Chief Executive of Cabuyao City',
    responsibilities: [
      'Enforces city laws, ordinances, and resolutions',
      'Leads all city departments and appoints heads',
      'Approves city spending and signs contracts',
      'Oversees implementation of development programs',
      'Represents the city in official functions',
    ],
  },
  {
    title: 'City Vice Mayor',
    name: VICE_MAYOR,
    role: 'Presiding Officer, Sangguniang Panlungsod',
    responsibilities: [
      'Presides over City Council sessions',
      'Ensures ordinances support city development',
      'Assumes duties as Acting Mayor when needed',
      'Co-leads legislative agenda of the city',
    ],
  },
];

export default function CityLeadershipSection() {
  return (
    <Section id="city-leadership">
      <Heading level={2} className="text-center mb-2">
        City Leadership
      </Heading>
      <p className="text-center text-gray-500 text-sm mb-8">
        {HONORIFIC_TITLE} elected officials · {YEAR_ELECTED} National and Local
        Elections
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-6xl mx-auto">
        {leaders.map(({ title, name, role, responsibilities }) => (
          <Link
            key={title}
            to="/government/departments/executive"
            className="flex-1 group"
          >
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardContent>
                <div className="flex flex-col items-center text-center gap-4 pt-8 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-1">
                      {title}
                    </p>
                    <p className="text-xl font-bold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500 mt-1">{role}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  {responsibilities.map(item => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
