import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PlayersSection from '../components/PlayersSection';
import CoachesSection from '../components/CoachesSection';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PlayersSection />
      <CoachesSection />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default LandingPage;