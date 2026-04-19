import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import CityOverviewSection from '../components/home/CityOverviewSection';
import CityLeadershipSection from '../components/home/CityLeadershipSection';
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
        <ServicesSection />
        <CityLeadershipSection />
        <CityOverviewSection />
      </main>
    </>
  );
};

export default Home;
