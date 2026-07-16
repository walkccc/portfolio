export interface AboutMeItemProps {
  title: string;
  /** Plain text, with optional `[label](href)` links. */
  paragraphs: string[];
}

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderParagraph(paragraph: string) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of Array.from(paragraph.matchAll(linkPattern))) {
    const [markup, label, href] = match;
    const start = match.index ?? 0;
    const isExternal = href.startsWith('http');

    if (start > cursor) {
      nodes.push(paragraph.slice(cursor, start));
    }

    nodes.push(
      <a
        key={start}
        href={href}
        {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
        className="text-foreground decoration-border hover:decoration-foreground underline underline-offset-4 transition-colors"
      >
        {label}
      </a>,
    );

    cursor = start + markup.length;
  }

  nodes.push(paragraph.slice(cursor));
  return nodes;
}

export function AboutMeItem({ title, paragraphs }: AboutMeItemProps) {
  return (
    <div className="border-border grid gap-x-8 gap-y-3 border-t py-6 sm:grid-cols-[7rem_1fr]">
      <h3 className="text-muted-foreground text-[0.6875rem] tracking-[0.15em] uppercase">
        {title}
      </h3>
      <div className="text-foreground/80 space-y-2.5 font-sans text-sm leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{renderParagraph(paragraph)}</p>
        ))}
      </div>
    </div>
  );
}
