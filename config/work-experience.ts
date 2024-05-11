import { WorkExperienceItemProps } from '@/components/work-experience-item';

export const workExperienceConfig: WorkExperienceItemProps[] = [
  {
    company: 'Google',
    title: 'Software Engineer',
    date: 'June 2022 - Present',
    location: 'New York, NY',
    descriptions: [
      "Design, build, and run a data serving platform that empowers all of Alphabet's speech and audio ML research",
    ],
  },
  {
    company: 'Snap Inc.',
    title: 'Software Engineer',
    date: 'March 2022 - June 2022',
    location: 'New York, NY',
    descriptions: [
      'Built messaging infrastructure for a single and consistent logic in C++ to bridge iOS and Android with backend',
      'Sped up the messaging experience in fetching feed and syncing feed by parallelization for 20% through A/B study',
      'Implemented GoogleTest to cover 99% of the business logic in both unit testing and integration testing',
    ],
  },
  {
    company: 'Meta',
    title: 'Software Engineer Intern',
    date: 'May 2021 - August 2021',
    location: 'New York, NY',
    descriptions: [
      'Established GraphQL APIs by Hack and created Python scripts that call the APIs to onboard Jest tests, allowing iOS and Android developers to have a uniform script to onboard newly written Jest tests',
      'Recommended trial numbers to lower the standard deviation of metric values by over 25% for three Jest tests',
      'Tinkered new formula for reasonable trial numbers with senior engineers and reported the process in daily standup',
    ],
  },
];
