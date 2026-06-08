'use client';

import { Target } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { crossubStrengths, strategyRecommendations } from '@/lib/mock-data';

const typeLabels = {
  brand_awareness: 'Brand Awareness',
  lead_generation: 'Lead Generation',
  agency_acquisition: 'Agency Acquisition',
  market_education: 'Market Education',
};

const priorityVariant = {
  high: 'destructive' as const,
  medium: 'warning' as const,
  low: 'muted' as const,
};

export default function StrategyPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="CROSSUB Strategy Engine"
        description="AI analyzes CROSSUB's unique strengths and generates recommended marketing strategies."
      />

      <Card>
        <CardHeader>
          <CardTitle>CROSSUB Unique Strengths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {crossubStrengths.map((strength) => (
              <div
                key={strength}
                className="flex items-center gap-2 rounded-lg border border-border p-3"
              >
                <Target className="size-4 shrink-0 text-primary" />
                <span className="text-sm">{strength}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Recommended Marketing Strategies</h2>
        {strategyRecommendations.map((strategy) => (
          <Card key={strategy.id}>
            <CardContent className="flex items-start justify-between gap-4 p-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{strategy.title}</p>
                  <Badge variant="muted">{typeLabels[strategy.type]}</Badge>
                  <Badge variant={priorityVariant[strategy.priority]}>
                    {strategy.priority} priority
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{strategy.rationale}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
