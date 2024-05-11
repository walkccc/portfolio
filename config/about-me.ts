import { type AboutMeItemProps } from '@/components/about-me-item';

export const aboutMeConfig: AboutMeItemProps[] = [
  {
    title: 'Bio',
    paragraphs: [
      "Hi, I'm Peng-Yu Chen, originally from the beautiful island of Penghu in Taiwan.",
      'Currently working as a Software Engineer in NYC, I enjoy creating real-life applications that bring tangible benefits to people.',
      'Fascinated by remarkable software practices and engineering excellence, my belief in following good coding conventions remains unwavering.',
    ],
    folderColor: 'text-theme-blue',
  },
  {
    title: 'Fun Facts',
    paragraphs: [
      "Wendy's Chicken is my first meal in the US.",
      'C is the first programming language I learned.',
      'I know a little Japanese.',
      'I watch animes.',
      'My cat is named "Lola".',
    ],
    folderColor: 'text-theme-green',
  },
  {
    title: 'Keywords',
    paragraphs: [
      'Coding, Traveling, Workout, Swimming, Walking, Foodie, Reading, Dry weather, Snow.',
    ],
    folderColor: 'text-theme-red',
  },
];
