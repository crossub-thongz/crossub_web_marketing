import type { ReactNode } from 'react';

import { isExternalHref } from '@/lib/site-links';
import { cn } from '@/lib/utils';

const primaryClass =
  'inline-flex h-12 items-center justify-center rounded-full bg-[#24C68D] px-7 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(36,198,141,0.28)] transition-colors hover:bg-[#1AAB78] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5';

const secondaryClass =
  'inline-flex h-12 items-center justify-center rounded-full border border-[#24C68D] bg-white px-7 text-[15px] font-semibold text-[#24C68D] transition-colors hover:bg-[#F3FBF8] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5';

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(primaryClass, className)}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(secondaryClass, className)}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-[#24C68D] hover:text-[#1AAB78]',
        className,
      )}
      {...(isExternalHref(href) ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
