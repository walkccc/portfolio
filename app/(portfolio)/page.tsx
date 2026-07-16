import { AboutMeItem } from '@/components/about-me-item';
import { EducationItem } from '@/components/education-item';
import { Hero } from '@/components/hero';
import { ProjectItem } from '@/components/project-item';
import { Section } from '@/components/section';
import { WorkExperienceItem } from '@/components/work-experience-item';
import { aboutMeConfig } from '@/config/about-me';
import { educationConfig } from '@/config/education';
import { openSourceConfig } from '@/config/open-source';
import { projectsConfig } from '@/config/projects';
import { workExperienceConfig } from '@/config/work-experience';

export default function IndexPage() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <Hero />
      <div className="flex flex-col gap-16">
        <Section id="about-me" title="About">
          {aboutMeConfig.map((aboutMeItem, index) => (
            <AboutMeItem key={index} {...aboutMeItem} />
          ))}
        </Section>
        <Section id="projects" title="Apps I Wish Exist">
          {projectsConfig.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </Section>
        <Section id="open-source" title="Open Source">
          {openSourceConfig.map((openSource, index) => (
            <ProjectItem key={index} {...openSource} />
          ))}
        </Section>
        <Section id="work-experience" title="Work">
          {workExperienceConfig.map((workExperience, index) => (
            <WorkExperienceItem key={index} {...workExperience} />
          ))}
        </Section>
        <Section id="education" title="Education">
          {educationConfig.map((education, index) => (
            <EducationItem key={index} {...education} />
          ))}
        </Section>
      </div>
    </div>
  );
}
