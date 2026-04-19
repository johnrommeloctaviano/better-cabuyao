import Section from '../ui/Section';
import HistoryTimeline from './HistoryTimeline';
import KeyStatistics from './KeyStatistics';

export default function CityOverviewSection() {
  return (
    <Section className="bg-gray-50" id="city-overview">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <HistoryTimeline />
        <KeyStatistics />
      </div>
    </Section>
  );
}
