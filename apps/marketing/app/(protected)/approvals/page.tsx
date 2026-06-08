'use client';

import { Check, MessageSquare, X } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { ApprovalStatusBadge } from '@/components/marketing/status-badge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  campaignProposals,
  optimizationRecommendations,
} from '@/lib/mock-data';
import { formatCurrency, formatDateTime } from '@/lib/utils';

export default function ApprovalsPage() {
  const pendingCampaigns = campaignProposals.filter(
    (p) => p.status === 'pending' || p.status === 'revision_requested',
  );
  const pendingOptimizations = optimizationRecommendations.filter(
    (o) => o.status === 'pending',
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Management Approval"
        description="Review campaign proposals and AI optimization recommendations. Management can approve, decline, or request revision."
      />

      <Tabs defaultValue="campaigns">
        <TabsList>
          <TabsTrigger value="campaigns">
            Campaign Proposals
            {pendingCampaigns.length > 0 && (
              <Badge variant="warning" className="ml-2">{pendingCampaigns.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="optimizations">
            Optimization Changes
            {pendingOptimizations.length > 0 && (
              <Badge variant="warning" className="ml-2">{pendingOptimizations.length}</Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="mt-6 space-y-4">
          {campaignProposals.map((proposal) => (
            <Card key={proposal.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-base">{proposal.name}</CardTitle>
                  <ApprovalStatusBadge status={proposal.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Market</p>
                    <p>{proposal.market}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Strategy</p>
                    <p>{proposal.strategy}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p>{formatCurrency(proposal.budget, proposal.currency)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expected ROI</p>
                    <p>{proposal.expectedRoi}× · {proposal.expectedLeads} leads</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Includes: Market Analysis · Competitor Analysis · Campaign Content · Budget Allocation · Expected Results
                </p>
                <p className="text-[10px] text-muted-foreground">
                  Submitted {formatDateTime(proposal.createdAt)}
                </p>
                {proposal.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button size="sm" className="gap-1">
                      <Check className="size-3" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <MessageSquare className="size-3" />
                      Request Revision
                    </Button>
                    <Button size="sm" variant="destructive" className="gap-1">
                      <X className="size-3" />
                      Decline
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="optimizations" className="mt-6 space-y-4">
          {optimizationRecommendations.map((rec) => (
            <Card key={rec.id}>
              <CardContent className="flex items-start justify-between gap-4 p-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{rec.title}</p>
                    <ApprovalStatusBadge status={rec.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Campaign: {rec.campaignName}
                  </p>
                  {rec.currentValue && rec.proposedValue && (
                    <div className="flex items-center gap-2 text-sm">
                      <span>{rec.currentValue}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className="font-medium text-primary">{rec.proposedValue}</span>
                    </div>
                  )}
                  <p className="text-[10px] text-muted-foreground">
                    {formatDateTime(rec.createdAt)}
                  </p>
                </div>
                {rec.status === 'pending' && (
                  <div className="flex shrink-0 gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="destructive">Decline</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
