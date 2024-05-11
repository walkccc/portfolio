import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <div className="flex h-screen flex-col justify-between py-36">
      <div>
        <h3 className="mb-2 pl-1 text-lg leading-6 text-highlight">
          Hi all. I am
        </h3>
        <h6 className="text-6xl text-highlight">Peng-Yu</h6>
        <h6 className="text-6xl text-highlight">Chen</h6>
        <h3 className="pl-1 text-lg font-medium text-theme-green">
          {'>'} Software Engineer
        </h3>
      </div>
      <div className="space-y-4 text-sm">
        <h3 className="text-theme-gray">{'//'} Find my profile on GitHub.</h3>
        <p className="font-medium">
          <span className="text-sm text-theme-blue">
            constexpr std::string_view{' '}
          </span>
          <span className="text-sm text-theme-green ">githubLink </span>
          <span className="text-sm">= </span>
          <a href={siteConfig.links.github}>
            <span className="text-sm text-theme-red hover:text-hover">
              {'"'}
              {siteConfig.links.github}
              {'"'}
            </span>
          </a>
          <span className="text-sm">;</span>
        </p>
      </div>
    </div>
  );
}
