import { AuthProvider } from '@/components/providers/auth-provider';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
