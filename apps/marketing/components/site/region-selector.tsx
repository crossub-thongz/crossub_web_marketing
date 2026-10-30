'use client';

import { Check, ChevronDown, Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

import {
  IP_COUNTRY_COOKIE,
  enabledRegions,
  regionFromPathname,
  switchRegionHref,
  type RegionCode,
} from '@/lib/regions';
import { cn } from '@/lib/utils';

export function RegionSelector({
  tone = 'default',
  placement = 'down',
}: {
  tone?: 'default' | 'laser' | 'onDark';
  placement?: 'down' | 'up';
}) {
  const pathname = usePathname() || '/AU';
  const region = regionFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const [ipCountry, setIpCountry] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const connection = ipCountry === 'NZ' ? 'New Zealand' : ipCountry === 'AU' ? 'Australia' : null;

  useEffect(() => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${IP_COUNTRY_COOKIE}=([^;]*)`));
    const value = match?.[1] ? decodeURIComponent(match[1]).toUpperCase() : '';
    if (value === 'AU' || value === 'NZ') setIpCountry(value);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          'inline-flex h-11 items-center gap-1.5 px-3 text-[15px] font-semibold',
          tone === 'laser' &&
            'rounded-full bg-[#07141C]/75 text-white shadow-[0_10px_28px_rgba(0,0,0,0.4)] ring-1 ring-white/20 backdrop-blur-md',
          tone === 'onDark' && 'text-white/90 hover:text-white',
          tone === 'default' && 'text-[#62697C] hover:text-[#171E4B]',
        )}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <Globe className="size-4" aria-hidden />
        {region}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open ? (
        <div
          id={menuId}
          role="listbox"
          aria-label="Select your region"
          className={cn(
            'absolute z-50 w-[280px] rounded-2xl bg-white p-3 text-left text-[#171E4B] shadow-[0_16px_40px_rgba(23,30,75,0.14)] ring-1 ring-[#171E4B]/8',
            placement === 'up' ? 'right-0 bottom-full mb-2' : 'right-0 top-full mt-2',
          )}
        >
          <p className="flex items-center gap-2 px-2 py-1.5 text-[14px] font-semibold text-[#62697C]">
            <Globe className="size-4" aria-hidden />
            Select your region
          </p>
          <div className="mt-1 space-y-1">
            {enabledRegions().map((item) => {
              const selected = item.code === region;
              return (
                <a
                  key={item.code}
                  href={switchRegionHref(pathname, item.code as RegionCode)}
                  role="option"
                  aria-selected={selected}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-2.5',
                    selected ? 'bg-[#E7FBF4]' : 'hover:bg-[#F4F6F8]',
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span className="w-7 text-[13px] font-bold tracking-wide text-[#171E4B]">{item.code}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold">{item.name}</span>
                    <span className="block text-[13px] text-[#62697C]">{item.summary}</span>
                  </span>
                  {selected ? <Check className="size-4 shrink-0 text-[#24C68D]" aria-hidden /> : null}
                </a>
              );
            })}
          </div>
          {connection ? (
            <p className="mt-2 border-t border-[#171E4B]/8 px-2 pt-2 text-[12px] leading-[1.45] text-[#62697C]">
              Your connection looks like {connection}. You can still choose either region.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
