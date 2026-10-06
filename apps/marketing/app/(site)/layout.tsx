import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';

import { AmbientBackground } from '@/components/site/ambient-background';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

import './site.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const title = 'CROSSUB | Free property management software';
const description =
  'Free property management software for your agency, powered by AI. Add Inspection Only or Full Service support whenever you need it.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.crossub.com.au'),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'CROSSUB',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${manrope.className} marketing-site relative min-h-screen text-[#171E4B]`}>
      <AmbientBackground />
      <div className="relative z-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
