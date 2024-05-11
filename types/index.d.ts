import { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type PortfolioConfig = {
  navItems: NavItem[];
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
};
