'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export function LegalToc({ items }: { items: { id: string; name: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        const current = visible[visible.length - 1];
        if (current?.target.id) setActive(current.target.id);
      },
      { rootMargin: '-20% 0px -68% 0px', threshold: [0, 1] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="flex max-h-[58vh] flex-col gap-0.5 overflow-auto pr-2" aria-label="On this page">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={item.id === active ? 'true' : undefined}
          className={cn(
            'border-l-2 px-3.5 py-2.5 text-[13px] leading-snug text-[#7A8291] transition',
            item.id === active
              ? 'rounded-r-[7px] border-[#22C58E] bg-[#EEFBF6] font-bold text-[#0C936D]'
              : 'border-transparent hover:bg-[#F7FBF9] hover:text-[#189A73]',
          )}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
