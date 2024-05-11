import { Icons } from '@/components/icons';

export interface WorkExperienceItemProps {
  company: string;
  title: string;
  date: string;
  location: string;
  descriptions: string[];
}

export function WorkExperienceItem({
  company,
  title,
  date,
  location,
  descriptions,
}: WorkExperienceItemProps) {
  return (
    <details className="group" open>
      <summary className="flex items-center hover:cursor-pointer hover:text-hover">
        <div className="flex w-12 items-center justify-around px-1">
          <Icons.chevronRight
            size={16}
            className="transition group-open:rotate-90"
          />
          {getSvgIcon(company)}
        </div>
        <h3 className="font-medium">{title}</h3>
      </summary>
      <div className="space-y-1.5 py-1 pl-12 text-sm md:text-base">
        <div className="text-xs font-extralight">{date}</div>
        <div className="text-xs font-thin">{location}</div>
        <ul>
          {descriptions.map((description, index) => (
            <li key={index} className="list-disc">
              {' '}
              {description}{' '}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function getSvgIcon(svgName: string) {
  if (svgName === 'GitHub') return <Icons.github width={12} height={12} />;
  if (svgName === 'Google') return <Icons.google width={12} height={12} />;
  if (svgName === 'Snap Inc.') return <Icons.snap width={12} height={12} />;
  if (svgName === 'Meta') return <Icons.meta width={12} height={12} />;
}
