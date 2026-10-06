import type { Metadata, Viewport } from 'next';

import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const metadata: Metadata = {
  title: 'CROSSUB | AI Marketing Department',
  description:
    'Fully automated AI marketing — market research, content creation, campaign management, optimization, and lead generation.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
