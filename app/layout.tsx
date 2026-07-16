import './globals.css';

import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-sans',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF8' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0C0E' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Peng-Yu Chen',
  description: siteConfig.description,
  keywords: ['Software', 'Web'],
  authors: [
    {
      name: 'Peng-Yu Chen',
      url: siteConfig.url,
    },
  ],
  creator: 'Peng-Yu Chen',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Peng-Yu Chen',
    description: siteConfig.description,
    siteName: 'Peng-Yu Chen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peng-Yu Chen',
    description: siteConfig.description,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-mono antialiased',
          mono.variable,
          sans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
