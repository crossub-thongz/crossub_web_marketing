'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import { PrimaryLink } from '@/components/site/buttons';
import { Wordmark } from '@/components/site/logo';
import { RegionSelector } from '@/components/site/region-selector';
import {
  offersServices,
  regionFromPathname,
  registerHref,
  stripRegion,
  withRegion,
} from '@/lib/regions';
import { siteLinks } from '@/lib/site-links';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'Home', href: siteLinks.home },
  { label: 'CROS AI', href: siteLinks.software },
  {
    label: 'Services',
    links: [
      { href: siteLinks.inspections, label: 'Inspection Service' },
      { href: siteLinks.fullService, label: 'Full Service' },
      { href: siteLinks.pricing, label: 'Pricing' },
    ],
  },
  {
    label: 'Company',
    links: [
      { href: siteLinks.about, label: 'About Us' },
      { href: '/#why', label: 'Why Us' },
      { href: siteLinks.contact, label: 'Contact' },
    ],
  },
  {
    label: 'Support',
    links: [
      { href: siteLinks.help, label: 'FAQs' },
      { href: siteLinks.privacy, label: 'Privacy Notice' },
      { href: '/terms', label: 'Terms of Use' },
    ],
  },
] as const;

function isMenu(item: (typeof NAV)[number]): item is Extract<(typeof NAV)[number], { links: readonly unknown[] }> {
  return 'links' in item;
}

function followLink(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const hashAt = href.indexOf('#');
  if (hashAt === -1) return;
  const id = href.slice(hashAt + 1);
  const path = href.slice(0, hashAt) || '/';
  if (window.location.pathname.replace(/\/$/, '') !== path.replace(/\/$/, '')) return;
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  window.history.pushState(null, '', href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [overLaser, setOverLaser] = useState(pathname === siteLinks.software);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== siteLinks.software) {
      setOverLaser(false);
      return;
    }
    const update = () => {
      const shot = document.getElementById('meet-cros-dashboard');
      if (shot) {
        setOverLaser(shot.getBoundingClientRect().top > 72);
        return;
      }
      const band = document.getElementById('meet-cros-laser');
      setOverLaser(band ? band.getBoundingClientRect().bottom > 72 : window.scrollY < 48);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(null);
    };
    const onPointer = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [menu]);

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
    setMenu(null);
    followLink(event, href);
  };

  const region = regionFromPathname(pathname);
  const path = stripRegion(pathname);
  const nav = NAV.filter((item) => item.label !== 'Services' || offersServices(region));
  const startFree = registerHref(region);

  const groupActive = (label: string) => {
    if (label === 'Home') return path === '/';
    if (label === 'CROS AI') return path === siteLinks.software;
    if (label === 'Services') {
      return ([siteLinks.inspections, siteLinks.fullService, siteLinks.pricing] as readonly string[]).includes(path);
    }
    if (label === 'Company') return path === siteLinks.about;
    return path === siteLinks.help || path === siteLinks.privacy || path === '/terms';
  };

  return (
    <header
      id="top"
      className={cn(
        'sticky top-0 z-50 border-b',
        overLaser && !open
          ? 'border-transparent bg-transparent'
          : cn('bg-white', scrolled || open || menu ? 'border-[#171E4B]/8' : 'border-transparent'),
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[72px] w-full max-w-[1480px] items-center justify-between gap-6 px-6 md:px-10">
        <a href={withRegion(region, '/#top')} aria-label="CROSSUB home" className="shrink-0 rounded-md">
          <Wordmark priority className={overLaser && !open ? 'brightness-0 invert' : undefined} />
        </a>

        <nav
          ref={navRef}
          className={cn(
            'hidden items-center gap-8 lg:flex',
            overLaser &&
              !open &&
              'gap-6 rounded-full bg-[#07141C]/75 px-6 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.4)] ring-1 ring-white/20 backdrop-blur-md',
          )}
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = groupActive(item.label);
            const itemClass = cn(
              'inline-flex items-center gap-1 text-[17px] font-medium whitespace-nowrap',
              overLaser && !open ? 'hover:text-white' : 'hover:text-[#171E4B]',
              active ? 'text-[#24C68D]' : overLaser && !open ? 'text-white' : 'text-[#62697C]',
            );
            if (!isMenu(item)) {
              return (
                <a
                  key={item.label}
                  href={withRegion(region, item.href)}
                  className={itemClass}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            }
            const expanded = menu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.label)}
                onMouseLeave={() => setMenu(null)}
              >
                <button
                  type="button"
                  className={cn(itemClass, expanded && 'text-[#24C68D]')}
                  aria-expanded={expanded}
                  onClick={() => setMenu(expanded ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('size-4 transition-transform', expanded && 'rotate-180')}
                    aria-hidden
                  />
                </button>
                {expanded ? (
                  <div className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 pt-3">
                    <ul className="rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(23,30,75,0.12)] ring-1 ring-[#171E4B]/8">
                      {item.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={withRegion(region, link.href)}
                            onClick={(event) => onNavigate(event, withRegion(region, link.href))}
                            className="block rounded-xl px-3 py-2.5 text-[16px] font-medium text-[#171E4B] hover:bg-[#F3FBF8] hover:text-[#24C68D]"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RegionSelector tone={overLaser && !open ? 'laser' : 'default'} />
          <a
            href={siteLinks.login}
            rel="noopener noreferrer"
            className={cn(
              'inline-flex h-11 items-center px-4 text-[15px] font-semibold',
              overLaser && !open
                ? 'rounded-full bg-[#07141C]/75 text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)] ring-1 ring-white/20 backdrop-blur-md'
                : 'text-[#171E4B]',
            )}
          >
            Log in
          </a>
          <PrimaryLink href={startFree}>Start for free</PrimaryLink>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-full lg:hidden',
            overLaser && !open ? 'text-white' : 'text-[#171E4B]',
          )}
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
            <div className="border-b border-[#171E4B]/6 py-2">
              <RegionSelector />
            </div>
            {nav.map((item) =>
              isMenu(item) ? (
                <div key={item.label} className="border-b border-[#171E4B]/6 py-2">
                  <p className="flex min-h-11 items-center text-[17px] font-semibold text-[#171E4B]">
                    {item.label}
                  </p>
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={withRegion(region, link.href)}
                      onClick={(event) => onNavigate(event, withRegion(region, link.href))}
                      className="flex min-h-11 items-center pl-4 text-[16px] font-medium text-[#62697C]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={withRegion(region, item.href)}
                  onClick={(event) => onNavigate(event, withRegion(region, item.href))}
                  className="flex min-h-11 items-center border-b border-[#171E4B]/6 text-[17px] font-semibold text-[#171E4B]"
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={siteLinks.login}
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-[16px] font-semibold text-[#171E4B]"
              onClick={() => setOpen(false)}
            >
              Log in
            </a>
            <PrimaryLink href={startFree} className="mt-3 w-full">
              Start for free
            </PrimaryLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
