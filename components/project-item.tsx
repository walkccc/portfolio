export interface ProjectItemProps {
  name: string;
  url: string;
  description: string;
}

export function ProjectItem({ name, url, description }: ProjectItemProps) {
  const displayUrl = url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <article className="border-border grid gap-x-8 gap-y-3 border-t py-6 sm:grid-cols-[1fr_auto]">
      <div>
        <h3 className="text-[0.9375rem] font-medium">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            {name}
          </a>
        </h3>
        <p className="text-foreground/70 mt-1.5 font-sans text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-foreground text-xs transition-colors sm:text-right"
      >
        {displayUrl}
      </a>
    </article>
  );
}
