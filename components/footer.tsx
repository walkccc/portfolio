import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, Icon: Icons.github },
  { label: 'Threads', href: siteConfig.links.threads, Icon: Icons.threads },
  { label: 'X', href: siteConfig.links.twitter, Icon: Icons.x },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, Icon: Icons.linkedin },
];

export function Footer() {
  return (
    <footer className="border-border mt-24 border-t">
      <div className="text-muted-foreground mx-auto flex max-w-2xl flex-col gap-4 px-6 py-8 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Peng-Yu Chen</p>
        <nav aria-label="Social profiles" className="flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
