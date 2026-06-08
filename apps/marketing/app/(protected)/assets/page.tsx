'use client';

import { Film, Image as ImageIcon } from 'lucide-react';

import { PageHeader } from '@/components/marketing/page-header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatPlatform, mediaAssets } from '@/lib/mock-data';

const imageTypes = ['carousel', 'banner', 'infographic'];
const videoTypes = ['video_short', 'video_reel'];

export default function AssetsPage() {
  const images = mediaAssets.filter((a) => imageTypes.includes(a.type));
  const videos = mediaAssets.filter((a) => videoTypes.includes(a.type));

  return (
    <div className="space-y-8">
      <PageHeader
        title="Image & Video Generation"
        description="AI creates carousel posts, banner ads, infographics, and short-form videos — all compliant with CROSSUB brand guidelines."
      />

      <Tabs defaultValue="images">
        <TabsList>
          <TabsTrigger value="images">Social Media Images</TabsTrigger>
          <TabsTrigger value="videos">Short-Form Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {images.map((asset) => (
              <Card key={asset.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="size-4 text-primary" />
                    <CardTitle className="text-sm">{asset.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="muted">{asset.type.replace(/_/g, ' ')}</Badge>
                  <div className="flex flex-wrap gap-1">
                    {asset.platform.map((p) => (
                      <Badge key={p} variant="muted">{formatPlatform(p)}</Badge>
                    ))}
                  </div>
                  <Badge
                    variant={
                      asset.status === 'approved'
                        ? 'success'
                        : asset.status === 'ready'
                          ? 'warning'
                          : 'muted'
                    }
                  >
                    {asset.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((asset) => (
              <Card key={asset.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Film className="size-4 text-primary" />
                    <CardTitle className="text-sm">{asset.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex gap-2">
                    <Badge variant="muted">{asset.duration}</Badge>
                    <Badge
                      variant={
                        asset.status === 'ready'
                          ? 'success'
                          : asset.status === 'generating'
                            ? 'warning'
                            : 'muted'
                      }
                    >
                      {asset.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Includes: Script · Voiceover · Subtitles · Branding
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {asset.platform.map((p) => (
                      <Badge key={p} variant="muted">{formatPlatform(p)}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
