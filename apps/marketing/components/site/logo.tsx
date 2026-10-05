import { cn } from '@/lib/utils';

export function LogoMark({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  const mask = `crossub-mark-${id}`;

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <mask id={mask}>
          <rect width="32" height="32" fill="black" />
          <circle cx="16" cy="16" r="13" fill="white" />
          <circle cx="16" cy="16" r="6.4" fill="black" />
          <rect x="14.15" y="1" width="3.7" height="30" fill="black" />
        </mask>
      </defs>
      <g mask={`url(#${mask})`}>
        <rect width="15.2" height="32" fill="#16324F" />
        <rect x="16.8" width="15.2" height="32" fill="#2ECB9A" />
      </g>
    </svg>
  );
}

export function Wordmark({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-[1.45rem] leading-none font-bold tracking-[-0.06em] text-[#16324F]',
        className,
      )}
    >
      cr
      <LogoMark id={id} className="-mx-[0.01em] h-[0.78em] w-[0.78em]" />
      ssu
      <span className="text-[#1FBF8F]">b</span>
    </span>
  );
}
