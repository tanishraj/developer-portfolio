import { AboutSection } from './components/about-section';
import { ContactSection } from './components/contact-section';
import { ExpertiseSection } from './components/expertise-section';
import { HeroSection } from './components/hero-section';
import { JourneySection } from './components/journey-section';
import { PortfolioSection } from './components/portfolio-section';
import { SkillsSection } from './components/skills-section';
import { portfolioData } from '../../../data/portfolio-data';
import { getPageData } from '../../../sanity';
import { useEffect } from 'react';

const Home = () => {
  async function fetchPageData() {
    const pageData = await getPageData();
    return pageData.length > 0 && pageData?.[0]?.components;
  }

  useEffect(() => {
    const data = fetchPageData();
    console.log(data);
  }, []);

  return (
    <>
      <HeroSection heroContent={getContent('heroSection')} />
      <AboutSection aboutContent={getContent('aboutSection')} />
      <ExpertiseSection expertiseContent={getContent('expertiseSection')} />
      <SkillsSection />
      <JourneySection experienceContent={getContent('experienceSection')} />
      <PortfolioSection portfolioContent={getContent('workSection')} />
      <ContactSection contactContent={getContent('contactSection')} />
    </>
  );
};

const getContent = (type: string) => {
  const { components } = portfolioData;
  return components.filter(comp => comp._type === type)[0];
};

export default Home;
