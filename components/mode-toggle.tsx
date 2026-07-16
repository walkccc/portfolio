'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { useMounted } from '@/hooks/use-mounted';

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Before hydration the resolved theme is unknown, so render a same-sized
  // placeholder rather than guess an icon and swap it on mount.
  if (!mounted) {
    return <div className="h-4 w-4" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      <Icons.contrast size={16} />
    </button>
  );
}
