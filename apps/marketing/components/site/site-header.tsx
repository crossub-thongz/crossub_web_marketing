'use client';

import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import { PrimaryLink } from '@/components/site/buttons';
import { Wordmark } from '@/components/site/logo';
import { isExternalHref, siteLinks } from '@/lib/site-links';
import { cn } from '@/lib/utils';

const NAV = [
  { href: siteLinks.software, label: 'Software' },
  { href: siteLinks.inspections, label: 'Inspections' },
  { href: siteLinks.fullService, label: 'Full Service' },
  { href: siteLinks.about, label: 'About' },
] as const;

function followLink(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('/#')) return;
  const target = document.getElementById(href.slice(2));
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.pushState(null, '', href);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    const first = panelRef.current?.querySelector<HTMLElement>('a');
    first?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const onNavigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    followLink(event, href);
  };

  return (
    <header
      id="top"
      className={cn(
        'sticky top-0 z-50 border-b transition-colors',
        scrolled || open
          ? 'border-[#171E4B]/8 bg-white/90 backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-md',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
        <a href="/#top" aria-label="Crossub home" className="rounded-md">
          <Wordmark id="header" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => onNavigate(event, item.href)}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={cn(
                'text-[15px] font-medium hover:text-[#171E4B]',
                pathname === item.href ? 'text-[#007455]' : 'text-[#3E4660]',
              )}
              {...(isExternalHref(item.href) ? { rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteLinks.login}
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center px-3 text-[15px] font-semibold text-[#171E4B]"
          >
            Log in
          </a>
          <PrimaryLink href={siteLinks.startFree}>Start for free</PrimaryLink>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-[#171E4B] md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="border-t border-[#171E4B]/8 bg-white px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => onNavigate(event, item.href)}
                className="flex min-h-11 items-center text-[16px] font-medium text-[#171E4B]"
                {...(isExternalHref(item.href) ? { rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.login}
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-[16px] font-semibold text-[#171E4B]"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <PrimaryLink href={siteLinks.startFree} className="mt-3 w-full">
              Start for free
            </PrimaryLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
