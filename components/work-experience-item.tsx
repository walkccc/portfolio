export interface WorkExperienceItemProps {
  company: string;
  title: string;
  date: string;
  location: string;
  descriptions?: string[];
}

export function WorkExperienceItem({
  company,
  title,
  date,
  location,
  descriptions,
}: WorkExperienceItemProps) {
  return (
    <article className="border-border grid gap-x-8 gap-y-3 border-t py-6 sm:grid-cols-[1fr_auto]">
      <div>
        <h3 className="text-[0.9375rem] font-medium">{company}</h3>
        <p className="text-muted-foreground mt-1.5 text-xs">{title}</p>
      </div>

      <div className="text-muted-foreground text-xs sm:text-right">
        <p className="tabular-nums">{date}</p>
        <p className="mt-1.5">{location}</p>
      </div>

      {descriptions && descriptions.length > 0 && (
        <ul className="text-foreground/70 marker:text-border list-outside list-disc space-y-2 pl-4 font-sans text-sm leading-relaxed sm:col-span-2">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
