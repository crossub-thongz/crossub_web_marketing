'use client';

import { ArrowRight, Users } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatPlatform, marketingLeads } from '@/lib/mock-data';
import { formatDateTime } from '@/lib/utils';

const statusVariant = {
  new: 'warning' as const,
  assigned: 'muted' as const,
  contacted: 'muted' as const,
  qualified: 'success' as const,
};

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Lead Management"
        description="Leads from advertising campaigns are automatically created, assigned to the Sales team, and tracked by source."
      />

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {marketingLeads.map((lead) => (
              <div
                key={lead.id}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium">{lead.name}</p>
                    <Badge variant={statusVariant[lead.status]}>{lead.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{lead.email}</p>
                  {lead.company && (
                    <p className="text-xs text-muted-foreground">{lead.company}</p>
                  )}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="muted">{formatPlatform(lead.source)}</Badge>
                    <span className="text-xs text-muted-foreground">{lead.campaignName}</span>
                  </div>
                  {lead.assignedTo && (
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <ArrowRight className="size-3" />
                      {lead.assignedTo}
                    </div>
                  )}
                  <p className="text-[10px] text-muted-foreground">
                    {formatDateTime(lead.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
        <Users className="size-4 text-primary" />
        <span>
          Leads are automatically handed over to the Sales Department with source attribution
          (Facebook, Instagram, TikTok, LinkedIn, Google).
        </span>
      </div>
    </div>
  );
}
