'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { MarketingShell } from '@/components/layout/marketing-shell';
import { AuthProvider, useAuth } from '@/components/providers/auth-provider';
import { ROUTES } from '@/constants/routes';

export function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ProtectedGate>{children}</ProtectedGate>
    </AuthProvider>
  );
}

function ProtectedGate({ children }: { children: React.ReactNode }) {
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === 'guest') {
      router.replace(ROUTES.LOGIN);
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="dark flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (status === 'guest') {
    return null;
  }

  return (
    <div className="dark bg-background text-foreground">
      <MarketingShell>{children}</MarketingShell>
    </div>
  );
}
