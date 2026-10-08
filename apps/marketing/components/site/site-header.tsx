'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import { PrimaryLink } from '@/components/site/buttons';
import { Wordmark } from '@/components/site/logo';
import { siteLinks } from '@/lib/site-links';
import { cn } from '@/lib/utils';

const SERVICES = [
  { href: siteLinks.inspections, label: 'Inspection Services' },
  { href: siteLinks.fullService, label: 'Full Service' },
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const servicesMenuId = useId();
  const pathname = usePathname();
  const servicesActive = SERVICES.some((item) => pathname === item.href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [servicesOpen]);

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
    setServicesOpen(false);
    followLink(event, href);
  };

  const linkClass = (active: boolean) =>
    cn(
      'text-[17px] font-medium whitespace-nowrap hover:text-[#171E4B]',
      active ? 'text-[#24C68D]' : 'text-[#62697C]',
    );

  return (
    <header
      id="top"
      className={cn(
        'sticky top-0 z-50 border-b bg-white',
        scrolled || open ? 'border-[#171E4B]/8' : 'border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between gap-6 px-6 md:px-8">
        <a href="/#top" aria-label="CROSSUB home" className="shrink-0 rounded-md">
          <Wordmark priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <a
            href={siteLinks.software}
            onClick={(event) => onNavigate(event, siteLinks.software)}
            aria-current={pathname === siteLinks.software ? 'page' : undefined}
            className={linkClass(pathname === siteLinks.software)}
          >
            Meet CROS
          </a>

          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(linkClass(servicesActive), 'inline-flex items-center gap-1')}
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <ChevronDown
                className={cn('size-4 transition-transform', servicesOpen && 'rotate-180')}
                aria-hidden
              />
            </button>
            {servicesOpen ? (
              <div
                id={servicesMenuId}
                className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 pt-3"
              >
                <ul className="rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8">
                  {SERVICES.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(event) => onNavigate(event, item.href)}
                        aria-current={pathname === item.href ? 'page' : undefined}
                        className={cn(
                          'block rounded-xl px-3 py-2.5 text-[16px] font-medium hover:bg-[#F3FBF8]',
                          pathname === item.href ? 'text-[#24C68D]' : 'text-[#171E4B]',
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <a
            href={siteLinks.about}
            onClick={(event) => onNavigate(event, siteLinks.about)}
            aria-current={pathname === siteLinks.about ? 'page' : undefined}
            className={linkClass(pathname === siteLinks.about)}
          >
            About
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          className="inline-flex size-11 items-center justify-center rounded-full text-[#171E4B] lg:hidden"
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
          className="border-t border-[#171E4B]/8 bg-white px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            <a
              href={siteLinks.software}
              onClick={(event) => onNavigate(event, siteLinks.software)}
              className="flex min-h-11 items-center text-[17px] font-medium text-[#171E4B]"
            >
              Meet CROS
            </a>
            <p className="flex min-h-11 items-center text-[17px] font-medium text-[#62697C]">Services</p>
            {SERVICES.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => onNavigate(event, item.href)}
                className="flex min-h-11 items-center pl-4 text-[17px] font-medium text-[#171E4B]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.about}
              onClick={(event) => onNavigate(event, siteLinks.about)}
              className="flex min-h-11 items-center text-[17px] font-medium text-[#171E4B]"
            >
              About
            </a>
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
