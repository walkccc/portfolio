import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { portfolioConfig } from '@/config/portfolio';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default async function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <>
      <Navbar navItems={portfolioConfig.navItems} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
