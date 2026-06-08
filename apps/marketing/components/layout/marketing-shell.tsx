'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Brain,
  CheckSquare,
  DollarSign,
  Globe,
  Image,
  LayoutDashboard,
  LogOut,
  Megaphone,
  PenLine,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

import { useAuth } from '@/components/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { cn, displayName } from '@/lib/utils';

const NAV = [
  { href: ROUTES.COMMAND_CENTER, label: 'Command Center', icon: LayoutDashboard },
  { href: ROUTES.MARKETS, label: 'Market Selection', icon: Globe },
  { href: ROUTES.INTELLIGENCE, label: 'Market Intelligence', icon: Search },
  { href: ROUTES.STRATEGY, label: 'Strategy Engine', icon: Target },
  { href: ROUTES.CONTENT, label: 'Content Generation', icon: PenLine },
  { href: ROUTES.ASSETS, label: 'Image & Video', icon: Image },
  { href: ROUTES.BUDGET, label: 'Budget Engine', icon: DollarSign },
  { href: ROUTES.APPROVALS, label: 'Approvals', icon: CheckSquare },
  { href: ROUTES.CAMPAIGNS, label: 'Campaigns', icon: Megaphone },
  { href: ROUTES.OPTIMIZATION, label: 'AI Optimization', icon: Zap },
  { href: ROUTES.LEADS, label: 'Lead Management', icon: Users },
  { href: ROUTES.AI_ASSISTANT, label: 'AI Assistant', icon: Brain },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === ROUTES.COMMAND_CENTER) {
    return pathname === href || pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MarketingShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-14 items-center gap-2 border-b border-border px-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="size-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">CROSSUB Marketing</p>
            <p className="text-[10px] text-muted-foreground">AI Marketing Department</p>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto p-3">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive(pathname, href)
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              <Icon className="size-4 shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border p-3">
          <div className="mb-2 truncate px-3 text-xs text-muted-foreground">
            {user ? displayName(user) : 'Marketing Portal'}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2"
            onClick={() => void logout()}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col lg:pl-60">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-border bg-background/95 px-4 backdrop-blur lg:hidden">
          <Sparkles className="size-4 text-primary" />
          <p className="text-sm font-semibold">CROSSUB Marketing</p>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
