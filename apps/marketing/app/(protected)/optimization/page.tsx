'use client';

import { AlertTriangle, Zap } from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/components/marketing/page-header';
import { ApprovalStatusBadge } from '@/components/marketing/status-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/constants/routes';
import { optimizationRecommendations } from '@/lib/mock-data';
import { formatDateTime } from '@/lib/utils';

const typeLabels = {
  audience_change: 'Change Target Audience',
  creative_swap: 'Change Creative Assets',
  budget_adjustment: 'Adjust Budget Allocation',
  pause_campaign: 'Pause Campaign',
};

export default function OptimizationPage() {
  const poorPerformers = [
    { metric: 'Low CTR', campaign: 'TikTok — PropTech Shorts', value: '1.64%' },
    { metric: 'High CPL', campaign: 'TikTok — PropTech Shorts', value: 'AUD 72.50' },
    { metric: 'Low ROI', campaign: 'Google — Inspection Software', value: '2.0×' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="AI Optimization Engine"
        description="AI continuously monitors campaign performance and generates optimization recommendations for management approval."
        action={
          <Button variant="outline" asChild>
            <Link href={ROUTES.APPROVALS}>View Approval Queue</Link>
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="size-4 text-destructive" />
            Poor Performance Detection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {poorPerformers.map((item) => (
            <div
              key={item.metric}
              className="flex items-center justify-between rounded-lg border border-destructive/30 bg-destructive/5 p-3"
            >
              <div>
                <p className="text-sm font-medium">{item.metric}</p>
                <p className="text-xs text-muted-foreground">{item.campaign}</p>
              </div>
              <span className="font-mono text-sm text-destructive">{item.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Zap className="size-5 text-primary" />
          Optimization Recommendations
        </h2>
        {optimizationRecommendations.map((rec) => (
          <Card key={rec.id}>
            <CardContent className="flex items-start justify-between gap-4 p-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{rec.title}</p>
                  <ApprovalStatusBadge status={rec.status} />
                </div>
                <p className="text-xs text-primary">{typeLabels[rec.type]}</p>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
                {rec.currentValue && rec.proposedValue && (
                  <p className="text-sm">
                    {rec.currentValue} → <span className="font-medium text-primary">{rec.proposedValue}</span>
                  </p>
                )}
                <p className="text-[10px] text-muted-foreground">
                  {rec.campaignName} · {formatDateTime(rec.createdAt)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
