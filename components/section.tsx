interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-muted-foreground text-[0.6875rem] font-medium tracking-[0.2em] uppercase">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
