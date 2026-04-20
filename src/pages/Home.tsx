import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import CityOverviewSection from '../components/home/CityOverviewSection';
import CityLeadershipSection from '../components/home/CityLeadershipSection';
import CityInfoSection from '../components/home/CityInfoSection';
import CityNicknamesSection from '../components/home/CityNicknamesSection';
import CityWondersSection from '../components/home/CityWondersSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Official community portal of Cabuyao City, Laguna. Access government services, information, and resources for residents."
        keywords="Cabuyao City, Laguna, CALABARZON, local government, LGU, government services, civic services"
      />
      <main className="flex-grow">
        <Hero />
        <CityInfoSection />
        <CityNicknamesSection />
        <CityWondersSection />
        <ServicesSection />
        <CityOverviewSection />
        <CityLeadershipSection />
      </main>
    </>
  );
};

export default Home;
