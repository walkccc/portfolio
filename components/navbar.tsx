import Link from 'next/link';

import { ModeToggle } from '@/components/mode-toggle';
import { siteConfig } from '@/config/site';

export function Navbar() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur-xs">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <Link
          href="/"
          className="hover:text-muted-foreground text-sm font-medium tracking-tight transition-colors"
        >
          PC
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <a
            href={siteConfig.links.blog}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
