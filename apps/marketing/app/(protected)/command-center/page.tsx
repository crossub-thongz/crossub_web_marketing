'use client';

import {
  AlertTriangle,
  BarChart3,
  DollarSign,
  Megaphone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/components/marketing/page-header';
import { StatCard } from '@/components/marketing/stat-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ROUTES } from '@/constants/routes';
import {
  commandCenterStats,
  formatPlatform,
  trendAlerts,
} from '@/lib/mock-data';
import { formatCurrency, formatDateTime } from '@/lib/utils';

const severityVariant = {
  info: 'muted' as const,
  warning: 'warning' as const,
  opportunity: 'success' as const,
};

export default function CommandCenterPage() {
  const stats = commandCenterStats;

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Marketing Command Center"
        description="Executive overview — management focuses on approvals, budget control, and strategic direction."
        action={
          <Button asChild>
            <Link href={ROUTES.APPROVALS}>
              <Target className="size-4" />
              Review Approvals
            </Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <StatCard label="Active Campaigns" value={stats.activeCampaigns} icon={Megaphone} />
        <StatCard label="Monthly Budget" value={formatCurrency(stats.monthlyBudget, stats.currency)} icon={DollarSign} />
        <StatCard label="Amount Spent" value={formatCurrency(stats.amountSpent, stats.currency)} icon={DollarSign} trend={`${Math.round((stats.amountSpent / stats.monthlyBudget) * 100)}% of budget`} />
        <StatCard label="Leads Generated" value={stats.leadsGenerated} icon={Users} />
        <StatCard label="Cost Per Lead" value={formatCurrency(stats.costPerLead, stats.currency)} icon={Target} />
        <StatCard label="Conversion Rate" value={`${stats.conversionRate}%`} icon={TrendingUp} />
        <StatCard label="ROI" value={`${stats.roi}×`} icon={BarChart3} />
        <StatCard label="Market Trend Alerts" value={stats.trendAlerts} icon={AlertTriangle} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Executive KPIs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground">Total Marketing Spend</p>
              <p className="mt-1 text-xl font-bold">{formatCurrency(stats.totalMarketingSpend, stats.currency)}</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground">Cost Per Agency Acquisition</p>
              <p className="mt-1 text-xl font-bold">{formatCurrency(stats.costPerAgencyAcquisition, stats.currency)}</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground">Best Performing Platform</p>
              <p className="mt-1 text-xl font-bold">{formatPlatform(stats.bestPlatform)}</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground">Worst Performing Platform</p>
              <p className="mt-1 text-xl font-bold">{formatPlatform(stats.worstPlatform)}</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Campaign Health Score</span>
              <span className="font-medium">{stats.campaignHealthScore}/100</span>
            </div>
            <Progress value={stats.campaignHealthScore} />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Market Trend Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {trendAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start justify-between gap-3 rounded-lg border border-border p-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <Badge variant={severityVariant[alert.severity]}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{alert.description}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {formatPlatform(alert.platform)} · {formatDateTime(alert.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automation Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { step: 'Market Research', status: 'Active', href: ROUTES.INTELLIGENCE },
                { step: 'Content Creation', status: 'Active', href: ROUTES.CONTENT },
                { step: 'Image Generation', status: 'Active', href: ROUTES.ASSETS },
                { step: 'Video Production', status: 'Active', href: ROUTES.ASSETS },
                { step: 'Budget Planning', status: 'Active', href: ROUTES.BUDGET },
                { step: 'Campaign Deployment', status: 'Active', href: ROUTES.CAMPAIGNS },
                { step: 'Campaign Optimization', status: 'Active', href: ROUTES.OPTIMIZATION },
                { step: 'Lead Handover to Sales', status: 'Active', href: ROUTES.LEADS },
              ].map((item) => (
                <Link
                  key={item.step}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-secondary/50"
                >
                  <span className="text-sm">{item.step}</span>
                  <Badge variant="success">{item.status}</Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Quick Actions</CardTitle>
          <Zap className="size-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" asChild size="sm">
              <Link href={ROUTES.STRATEGY}>View Strategies</Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href={ROUTES.APPROVALS}>Pending Approvals</Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href={ROUTES.OPTIMIZATION}>AI Optimizations</Link>
            </Button>
            <Button variant="outline" asChild size="sm">
              <Link href={ROUTES.AI_ASSISTANT}>AI Assistant</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
