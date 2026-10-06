import { cn } from '@/lib/utils';

export function Wordmark({
  className,
  compact = false,
  priority = false,
}: {
  className?: string;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <img
      src="/brand/crossub-logo.png"
      alt=""
      width={640}
      height={155}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn('w-auto', compact ? 'h-7' : 'h-10', className)}
    />
  );
}
