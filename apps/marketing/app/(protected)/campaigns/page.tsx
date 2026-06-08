'use client';

import {
  BarChart3,
  Eye,
  MousePointer,
  Users,
} from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { CampaignStatusBadge } from '@/components/marketing/status-badge';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  activeCampaigns,
  formatPlatform,
  platformIntegrations,
} from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function CampaignsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Campaign Launch & Performance"
        description="Live performance dashboard — impressions, reach, clicks, leads, CTR, CPL, conversion rate, and ROI."
      />

      <Card>
        <CardHeader>
          <CardTitle>Platform Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformIntegrations.map((integration) => (
              <div
                key={integration.platform}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div>
                  <p className="text-sm font-medium">{formatPlatform(integration.platform)}</p>
                  <p className="text-xs text-muted-foreground">{integration.detail}</p>
                </div>
                <Badge variant={integration.status === 'connected' ? 'success' : 'muted'}>
                  {integration.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {activeCampaigns.map((campaign) => {
          const spendPercent = Math.round((campaign.spent / campaign.budget) * 100);
          return (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-base">{campaign.name}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="muted">{formatPlatform(campaign.platform)}</Badge>
                    <CampaignStatusBadge status={campaign.status} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Spent {formatCurrency(campaign.spent, campaign.currency)} of {formatCurrency(campaign.budget, campaign.currency)}
                    </span>
                    <span>{spendPercent}%</span>
                  </div>
                  <Progress value={spendPercent} />
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                    <Eye className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Impressions</p>
                      <p className="font-medium">{campaign.impressions.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                    <Users className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Reach</p>
                      <p className="font-medium">{campaign.reach.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                    <MousePointer className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Clicks · CTR</p>
                      <p className="font-medium">{campaign.clicks.toLocaleString()} · {campaign.ctr}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-border p-3">
                    <BarChart3 className="size-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Leads · CPL · ROI</p>
                      <p className="font-medium">
                        {campaign.leads} · {formatCurrency(campaign.cpl, campaign.currency)} · {campaign.roi}×
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>Conversion: {campaign.conversionRate}%</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
