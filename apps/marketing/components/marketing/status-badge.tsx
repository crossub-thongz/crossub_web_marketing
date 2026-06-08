import { Badge } from '@/components/ui/badge';
import type { ApprovalStatus, CampaignStatus } from '@/lib/types';

const campaignVariants: Record<CampaignStatus, 'success' | 'warning' | 'muted' | 'destructive'> = {
  draft: 'muted',
  pending_approval: 'warning',
  approved: 'success',
  active: 'success',
  paused: 'warning',
  completed: 'muted',
};

const approvalVariants: Record<ApprovalStatus, 'success' | 'warning' | 'muted' | 'destructive'> = {
  pending: 'warning',
  approved: 'success',
  declined: 'destructive',
  revision_requested: 'muted',
};

export function CampaignStatusBadge({ status }: { status: CampaignStatus }) {
  return (
    <Badge variant={campaignVariants[status]}>
      {status.replace(/_/g, ' ')}
    </Badge>
  );
}

export function ApprovalStatusBadge({ status }: { status: ApprovalStatus }) {
  return (
    <Badge variant={approvalVariants[status]}>
      {status.replace(/_/g, ' ')}
    </Badge>
  );
}
