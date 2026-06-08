'use client';

import { PenLine } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { contentDrafts, formatPlatform } from '@/lib/mock-data';

export default function ContentPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Content Generation"
        description="AI automatically generates post copy, hashtags, and CTAs for Facebook, Instagram, LinkedIn, and TikTok."
      />

      <div className="space-y-4">
        {contentDrafts.map((draft) => (
          <Card key={draft.id}>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-base">{draft.title}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="muted">{formatPlatform(draft.platform)}</Badge>
                  <Badge
                    variant={
                      draft.status === 'ready'
                        ? 'success'
                        : draft.status === 'scheduled'
                          ? 'warning'
                          : 'muted'
                    }
                  >
                    {draft.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">{draft.copy}</p>
              <div className="flex flex-wrap gap-1">
                {draft.hashtags.map((tag) => (
                  <span key={tag} className="text-xs text-primary">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2">
                <PenLine className="size-3 text-primary" />
                <span className="text-sm font-medium text-primary">CTA: {draft.cta}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
