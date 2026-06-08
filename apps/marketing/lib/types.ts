export type Currency = 'AUD' | 'MYR' | 'RMB' | 'USD' | 'SGD';

export type Country = 'australia' | 'malaysia' | 'united_kingdom' | 'singapore' | 'new_zealand';

export type CampaignStatus = 'draft' | 'pending_approval' | 'approved' | 'active' | 'paused' | 'completed';

export type ApprovalStatus = 'pending' | 'approved' | 'declined' | 'revision_requested';

export type Platform = 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube' | 'google' | 'reddit';

export type ContentType = 'post' | 'carousel' | 'banner' | 'infographic' | 'video_short' | 'video_reel';

export type OptimizationType =
  | 'audience_change'
  | 'creative_swap'
  | 'budget_adjustment'
  | 'pause_campaign';

export interface MarketSelection {
  country: Country;
  states: string[];
  cities: string[];
}

export interface TrendAlert {
  id: string;
  title: string;
  description: string;
  platform: Platform;
  severity: 'info' | 'warning' | 'opportunity';
  createdAt: string;
}

export interface CompetitorInsight {
  id: string;
  name: string;
  adFrequency: 'low' | 'medium' | 'high';
  topPainPoint: string;
  opportunity: string;
  sentiment: 'negative' | 'neutral' | 'positive';
}

export interface SocialTrend {
  id: string;
  platform: Platform;
  topic: string;
  hashtags: string[];
  sentiment: number;
  volume: string;
}

export interface StrategyRecommendation {
  id: string;
  title: string;
  type: 'brand_awareness' | 'lead_generation' | 'agency_acquisition' | 'market_education';
  rationale: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ContentDraft {
  id: string;
  platform: Platform;
  title: string;
  copy: string;
  hashtags: string[];
  cta: string;
  status: 'draft' | 'ready' | 'scheduled';
}

export interface MediaAsset {
  id: string;
  type: ContentType;
  title: string;
  duration?: string;
  platform: Platform[];
  status: 'generating' | 'ready' | 'approved';
}

export interface BudgetAllocation {
  platform: Platform;
  amount: number;
  currency: Currency;
}

export interface BudgetProposal {
  id: string;
  market: string;
  allocations: BudgetAllocation[];
  total: number;
  currency: Currency;
  forecastLeads: number;
  forecastCpl: number;
  forecastRoi: number;
  status: ApprovalStatus;
}

export interface CampaignProposal {
  id: string;
  name: string;
  market: string;
  strategy: string;
  status: ApprovalStatus;
  budget: number;
  currency: Currency;
  expectedLeads: number;
  expectedRoi: number;
  createdAt: string;
}

export interface ActiveCampaign {
  id: string;
  name: string;
  platform: Platform;
  status: CampaignStatus;
  budget: number;
  spent: number;
  currency: Currency;
  impressions: number;
  reach: number;
  clicks: number;
  leads: number;
  ctr: number;
  cpl: number;
  conversionRate: number;
  roi: number;
}

export interface OptimizationRecommendation {
  id: string;
  campaignId: string;
  campaignName: string;
  type: OptimizationType;
  title: string;
  description: string;
  currentValue?: string;
  proposedValue?: string;
  status: ApprovalStatus;
  createdAt: string;
}

export interface MarketingLead {
  id: string;
  name: string;
  email: string;
  company?: string;
  source: Platform;
  campaignId: string;
  campaignName: string;
  status: 'new' | 'assigned' | 'contacted' | 'qualified';
  assignedTo?: string;
  createdAt: string;
}

export interface CommandCenterStats {
  activeCampaigns: number;
  monthlyBudget: number;
  amountSpent: number;
  leadsGenerated: number;
  costPerLead: number;
  conversionRate: number;
  roi: number;
  trendAlerts: number;
  totalMarketingSpend: number;
  costPerAgencyAcquisition: number;
  bestPlatform: Platform;
  worstPlatform: Platform;
  campaignHealthScore: number;
  currency: Currency;
}

export interface PlatformIntegration {
  platform: Platform;
  status: 'connected' | 'planned' | 'pending';
  detail: string;
}
