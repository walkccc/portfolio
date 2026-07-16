export interface EducationItemProps {
  school: string;
  degree: string;
  date?: string;
  location?: string;
}

export function EducationItem({
  school,
  degree,
  date,
  location,
}: EducationItemProps) {
  return (
    <article className="border-border grid gap-x-8 gap-y-3 border-t py-6 sm:grid-cols-[1fr_auto]">
      <div>
        <h3 className="text-[0.9375rem] font-medium">{school}</h3>
        <p className="text-muted-foreground mt-1.5 text-xs">{degree}</p>
      </div>

      {(date || location) && (
        <div className="text-muted-foreground text-xs sm:text-right">
          {date && <p className="tabular-nums">{date}</p>}
          {location && <p className="mt-1.5">{location}</p>}
        </div>
      )}
    </article>
  );
}
