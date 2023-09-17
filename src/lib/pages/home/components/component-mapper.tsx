import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { ExpertiseSection } from '../components/expertise-section';
import { SkillsSection } from '../components/skills-section';
import { ExperienceSection } from './experience-section';
import { WorkSection } from '../components/work-section';
import { ContactSection } from '../components/contact-section';

const componentMapper = {
  heroSection: HeroSection,
  aboutSection: AboutSection,
  expertiseSection: ExpertiseSection,
  skillsSection: SkillsSection,
  experienceSection: ExperienceSection,
  workSection: WorkSection,
  contactSection: ContactSection,
};

export const ComponentMapper = ({ props }: any) => {
  const Component =
    componentMapper[props._type as keyof typeof componentMapper];

  return (
    <>
      <Component
        key={props._key}
        {...props}
      />
    </>
  );
};
