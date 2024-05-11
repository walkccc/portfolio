interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <>
      <div id={id} className="h-2 text-xl font-medium text-highlight">
        {title}
      </div>
      <div className="flex flex-col space-y-3">{children}</div>
    </>
  );
}
