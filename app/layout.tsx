import './custom.css';
import './globals.css';

import type { Metadata, Viewport } from 'next';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Fira_Code } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const inter: NextFontWithVariable = Fira_Code({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
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
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
