import * as React from 'react';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div className="container flex h-12 flex-col items-center justify-center md:h-20">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <p className="text-center text-xs hover:text-hover">
            Built by Peng-Yu Chen © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
