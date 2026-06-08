'use client';

import { DollarSign, TrendingUp } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { ApprovalStatusBadge } from '@/components/marketing/status-badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { budgetProposals, formatPlatform } from '@/lib/mock-data';
import { formatCurrency } from '@/lib/utils';

export default function BudgetPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Budget Engine"
        description="AI generates budget proposals per platform with performance forecasting for leads, CPL, and ROI."
      />

      <div className="space-y-6">
        {budgetProposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-base">{proposal.market}</CardTitle>
                <ApprovalStatusBadge status={proposal.status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {proposal.allocations.map((alloc) => (
                  <div
                    key={alloc.platform}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <span className="text-sm">{formatPlatform(alloc.platform)}</span>
                    <span className="font-medium">
                      {formatCurrency(alloc.amount, alloc.currency)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="size-4 text-primary" />
                  <span className="font-medium">Total Budget</span>
                </div>
                <span className="text-xl font-bold text-primary">
                  {formatCurrency(proposal.total, proposal.currency)}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-border p-4 text-center">
                  <p className="text-xs text-muted-foreground">Forecast Leads</p>
                  <p className="mt-1 text-2xl font-bold">{proposal.forecastLeads}</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-center">
                  <p className="text-xs text-muted-foreground">Forecast CPL</p>
                  <p className="mt-1 text-2xl font-bold">
                    {formatCurrency(proposal.forecastCpl, proposal.currency)}
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4 text-center">
                  <p className="text-xs text-muted-foreground">Forecast ROI</p>
                  <p className="mt-1 flex items-center justify-center gap-1 text-2xl font-bold text-primary">
                    <TrendingUp className="size-5" />
                    {proposal.forecastRoi}×
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
