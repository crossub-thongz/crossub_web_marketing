'use client';

import { Search, TrendingUp } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { competitors, formatPlatform, socialTrends } from '@/lib/mock-data';

export default function IntelligencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Market Intelligence Engine"
        description="AI analyzes social media trends and competitor activity across Facebook, Instagram, TikTok, LinkedIn, YouTube, and Reddit."
      />

      <Tabs defaultValue="trends">
        <TabsList>
          <TabsTrigger value="trends">Social Media Trends</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="mt-6 space-y-4">
          {socialTrends.map((trend) => (
            <Card key={trend.id}>
              <CardContent className="flex items-start justify-between gap-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="muted">{formatPlatform(trend.platform)}</Badge>
                    <p className="font-medium">{trend.topic}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {trend.hashtags.map((tag) => (
                      <span key={tag} className="text-xs text-primary">{tag}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{trend.volume}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Sentiment</p>
                  <p className={`text-lg font-bold ${trend.sentiment >= 0 ? 'text-primary' : 'text-destructive'}`}>
                    {trend.sentiment >= 0 ? '+' : ''}{(trend.sentiment * 100).toFixed(0)}%
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="competitors" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {competitors.map((comp) => (
              <Card key={comp.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{comp.name}</CardTitle>
                    <Badge
                      variant={
                        comp.adFrequency === 'high'
                          ? 'destructive'
                          : comp.adFrequency === 'medium'
                            ? 'warning'
                            : 'muted'
                      }
                    >
                      {comp.adFrequency} ad frequency
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Customer Pain Point</p>
                    <p>{comp.topPainPoint}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Market Opportunity</p>
                    <p className="text-primary">{comp.opportunity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Customer sentiment: {comp.sentiment}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="size-4 text-primary" />
            Data Sources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Reddit'].map((source) => (
              <Badge key={source} variant="success">{source}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
