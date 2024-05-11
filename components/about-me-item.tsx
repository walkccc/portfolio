import { Icons } from '@/components/icons';

export interface AboutMeItemProps {
  title: string;
  paragraphs: string[];
  folderColor: string;
}

export function AboutMeItem({
  title,
  paragraphs,
  folderColor,
}: AboutMeItemProps) {
  return (
    <details className="group" open>
      <summary className="flex items-center hover:cursor-pointer hover:text-hover">
        <div className="flex w-12 items-center justify-around px-1">
          <Icons.chevronRight
            size={16}
            className="transition group-open:rotate-90"
          />
          <div className={folderColor}>
            <Icons.folder size={16} />
          </div>
        </div>
        <h3 className="font-medium">{title}</h3>
      </summary>
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className="space-y-1.5 py-1 pl-12 text-sm md:text-base"
        >
          {paragraph}
        </div>
      ))}
    </details>
  );
}
