import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { ExpertiseSection } from './components/expertise-section';
import { HeroSection } from './components/hero-section';
import { JourneySection } from './components/journey-section';
import { PortfolioSection } from './components/portfolio-section';
import { SkillsSection } from './components/skills-section';
import { portfolioData } from '../../../data/portfolio-data';

const Home = () => {
  console.log('API DATA', portfolioData);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <SkillsSection />
      <JourneySection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;
