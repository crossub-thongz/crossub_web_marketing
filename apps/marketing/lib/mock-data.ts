import type {
  ActiveCampaign,
  BudgetProposal,
  CampaignProposal,
  CommandCenterStats,
  CompetitorInsight,
  ContentDraft,
  MarketingLead,
  MediaAsset,
  OptimizationRecommendation,
  PlatformIntegration,
  SocialTrend,
  StrategyRecommendation,
  TrendAlert,
} from './types';

export const COUNTRY_OPTIONS = [
  { id: 'australia', label: 'Australia', states: ['NSW', 'VIC', 'QLD', 'WA', 'SA'] },
  { id: 'malaysia', label: 'Malaysia', states: ['Johor', 'Selangor', 'Penang', 'KL'] },
  { id: 'united_kingdom', label: 'United Kingdom', states: ['England', 'Scotland', 'Wales'] },
  { id: 'singapore', label: 'Singapore', states: ['Central', 'East', 'West'] },
  { id: 'new_zealand', label: 'New Zealand', states: ['Auckland', 'Wellington', 'Canterbury'] },
] as const;

export const CITY_OPTIONS: Record<string, string[]> = {
  australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  malaysia: ['Kuala Lumpur', 'Johor Bahru', 'Penang', 'Shah Alam'],
  united_kingdom: ['London', 'Manchester', 'Birmingham'],
  singapore: ['Singapore'],
  new_zealand: ['Auckland', 'Wellington', 'Christchurch'],
};

export const selectedMarket = {
  country: 'australia' as const,
  states: ['NSW', 'VIC', 'QLD'],
  cities: ['Sydney', 'Melbourne', 'Brisbane'],
};

export const commandCenterStats: CommandCenterStats = {
  activeCampaigns: 6,
  monthlyBudget: 12000,
  amountSpent: 7840,
  leadsGenerated: 142,
  costPerLead: 55.2,
  conversionRate: 18.3,
  roi: 3.4,
  trendAlerts: 4,
  totalMarketingSpend: 7840,
  costPerAgencyAcquisition: 428,
  bestPlatform: 'linkedin',
  worstPlatform: 'tiktok',
  campaignHealthScore: 78,
  currency: 'AUD',
};

export const trendAlerts: TrendAlert[] = [
  {
    id: 'ta-001',
    title: 'Rising demand for outsourced PM in NSW',
    description: 'LinkedIn and Reddit discussions up 34% — property managers seeking cost reduction.',
    platform: 'linkedin',
    severity: 'opportunity',
    createdAt: '2026-06-07T08:00:00Z',
  },
  {
    id: 'ta-002',
    title: 'Competitor ad surge — PropertyMe',
    description: 'PropertyMe increased Meta ad frequency 2.5× in Melbourne metro.',
    platform: 'facebook',
    severity: 'warning',
    createdAt: '2026-06-06T14:00:00Z',
  },
  {
    id: 'ta-003',
    title: '#PropTech trending on TikTok AU',
    description: 'Short-form AI automation content gaining traction with agency owners.',
    platform: 'tiktok',
    severity: 'opportunity',
    createdAt: '2026-06-05T10:00:00Z',
  },
  {
    id: 'ta-004',
    title: 'Inspection compliance keyword spike',
    description: 'Google search volume for "property inspection software" up 22% QoQ.',
    platform: 'google',
    severity: 'info',
    createdAt: '2026-06-04T06:00:00Z',
  },
];

export const socialTrends: SocialTrend[] = [
  { id: 'st-1', platform: 'linkedin', topic: 'Outsourced property management', hashtags: ['#PropTech', '#PropertyManagement'], sentiment: 0.72, volume: '12.4K posts' },
  { id: 'st-2', platform: 'facebook', topic: 'Agency burnout & staffing', hashtags: ['#RealEstate', '#AgencyLife'], sentiment: -0.31, volume: '8.1K posts' },
  { id: 'st-3', platform: 'tiktok', topic: 'AI property inspections', hashtags: ['#PropTech', '#AI'], sentiment: 0.85, volume: '2.3M views' },
  { id: 'st-4', platform: 'instagram', topic: 'Maintenance automation', hashtags: ['#PropertyMgmt', '#SmartHome'], sentiment: 0.58, volume: '45K posts' },
  { id: 'st-5', platform: 'reddit', topic: 'PropertyMe vs alternatives', hashtags: ['r/AusProperty'], sentiment: -0.42, volume: '340 threads' },
  { id: 'st-6', platform: 'youtube', topic: 'Property management software reviews', hashtags: ['#SoftwareReview'], sentiment: 0.15, volume: '890K views' },
];

export const competitors: CompetitorInsight[] = [
  { id: 'c-1', name: 'PropertyMe', adFrequency: 'high', topPainPoint: 'Complex pricing, steep learning curve', opportunity: 'Position CROSSUB as simpler all-in-one with AI', sentiment: 'negative' },
  { id: 'c-2', name: 'PropertyTree', adFrequency: 'medium', topPainPoint: 'Limited maintenance workflow', opportunity: 'Highlight integrated maintenance department', sentiment: 'neutral' },
  { id: 'c-3', name: 'Managed App', adFrequency: 'low', topPainPoint: 'No inspection automation', opportunity: 'Lead with AI inspection capabilities', sentiment: 'negative' },
  { id: 'c-4', name: 'HomHero', adFrequency: 'medium', topPainPoint: 'Holiday rental focus, not full PM', opportunity: 'Target residential agency acquisition', sentiment: 'neutral' },
  { id: 'c-5', name: 'Inspection Express', adFrequency: 'low', topPainPoint: 'Single-feature tool', opportunity: 'Bundle inspections with full PM suite', sentiment: 'positive' },
];

export const crossubStrengths = [
  'Outsourced Property Management',
  'Maintenance Management',
  'Inspection Department',
  'AI Automation',
  'Global Team Structure',
  'Lower Operating Costs',
];

export const strategyRecommendations: StrategyRecommendation[] = [
  { id: 'sr-1', title: 'Agency Acquisition — Sydney & Melbourne', type: 'agency_acquisition', rationale: 'High competitor dissatisfaction + rising outsourced PM demand in NSW/VIC.', priority: 'high' },
  { id: 'sr-2', title: 'Brand Awareness — AI Automation', type: 'brand_awareness', rationale: 'TikTok and LinkedIn trending on PropTech AI content.', priority: 'high' },
  { id: 'sr-3', title: 'Lead Gen — Maintenance Pain Points', type: 'lead_generation', rationale: 'Facebook groups show agency frustration with maintenance coordination.', priority: 'medium' },
  { id: 'sr-4', title: 'Market Education — Outsourced PM Model', type: 'market_education', rationale: 'Many agencies unaware of global team cost advantages.', priority: 'medium' },
];

export const contentDrafts: ContentDraft[] = [
  { id: 'cd-1', platform: 'linkedin', title: 'Why agencies are switching to outsourced PM', copy: 'Property management doesn\'t have to mean burnout. CROSSUB\'s global team handles inspections, maintenance, and leasing — so you focus on growth.', hashtags: ['#PropTech', '#PropertyManagement', '#OutsourcedPM'], cta: 'Book a demo', status: 'ready' },
  { id: 'cd-2', platform: 'facebook', title: 'Cut operating costs by 40%', copy: 'Agencies using CROSSUB report 40% lower operating costs with AI-powered automation across inspections and maintenance.', hashtags: ['#RealEstate', '#AgencyGrowth'], cta: 'Learn more', status: 'scheduled' },
  { id: 'cd-3', platform: 'tiktok', title: 'AI inspection in 60 seconds', copy: 'Watch how CROSSUB AI completes a full property inspection workflow — from scheduling to report delivery.', hashtags: ['#PropTech', '#AI', '#PropertyInspection'], cta: 'Follow for more', status: 'draft' },
  { id: 'cd-4', platform: 'instagram', title: 'Before vs After — Maintenance workflow', copy: 'Swipe to see how agencies transformed their maintenance process with CROSSUB.', hashtags: ['#PropertyMgmt', '#Maintenance'], cta: 'Link in bio', status: 'ready' },
];

export const mediaAssets: MediaAsset[] = [
  { id: 'ma-1', type: 'carousel', title: 'CROSSUB vs PropertyMe — Feature Comparison', platform: ['instagram', 'linkedin'], status: 'ready' },
  { id: 'ma-2', type: 'banner', title: 'Agency Acquisition — Sydney Metro', platform: ['facebook'], status: 'approved' },
  { id: 'ma-3', type: 'infographic', title: 'Global Team Cost Savings', platform: ['linkedin'], status: 'ready' },
  { id: 'ma-4', type: 'video_short', title: 'AI Inspection Demo — 15s', duration: '15s', platform: ['tiktok', 'instagram'], status: 'generating' },
  { id: 'ma-5', type: 'video_reel', title: 'Day in the Life — Outsourced PM', duration: '30s', platform: ['instagram', 'facebook'], status: 'ready' },
  { id: 'ma-6', type: 'video_short', title: 'Maintenance Automation Explainer', duration: '60s', platform: ['youtube', 'tiktok'], status: 'ready' },
];

export const budgetProposals: BudgetProposal[] = [
  {
    id: 'bp-001',
    market: 'Australia — NSW & VIC',
    allocations: [
      { platform: 'facebook', amount: 500, currency: 'AUD' },
      { platform: 'instagram', amount: 300, currency: 'AUD' },
      { platform: 'tiktok', amount: 700, currency: 'AUD' },
      { platform: 'linkedin', amount: 500, currency: 'AUD' },
    ],
    total: 2000,
    currency: 'AUD',
    forecastLeads: 36,
    forecastCpl: 55.6,
    forecastRoi: 3.2,
    status: 'pending',
  },
  {
    id: 'bp-002',
    market: 'Malaysia — KL & Johor',
    allocations: [
      { platform: 'facebook', amount: 400, currency: 'MYR' },
      { platform: 'instagram', amount: 250, currency: 'MYR' },
      { platform: 'linkedin', amount: 350, currency: 'MYR' },
    ],
    total: 1000,
    currency: 'MYR',
    forecastLeads: 18,
    forecastCpl: 55.6,
    forecastRoi: 2.8,
    status: 'approved',
  },
];

export const campaignProposals: CampaignProposal[] = [
  {
    id: 'cp-001',
    name: 'Agency Acquisition — Sydney Metro Q3',
    market: 'Australia — NSW',
    strategy: 'Lead Generation + Agency Acquisition',
    status: 'pending',
    budget: 2000,
    currency: 'AUD',
    expectedLeads: 36,
    expectedRoi: 3.2,
    createdAt: '2026-06-07T09:00:00Z',
  },
  {
    id: 'cp-002',
    name: 'Brand Awareness — AI PropTech',
    market: 'Australia — National',
    strategy: 'Brand Awareness + Market Education',
    status: 'revision_requested',
    budget: 3500,
    currency: 'AUD',
    expectedLeads: 22,
    expectedRoi: 2.1,
    createdAt: '2026-06-05T11:00:00Z',
  },
  {
    id: 'cp-003',
    name: 'KL Agency Outreach',
    market: 'Malaysia — Kuala Lumpur',
    strategy: 'Agency Acquisition',
    status: 'approved',
    budget: 1000,
    currency: 'MYR',
    expectedLeads: 18,
    expectedRoi: 2.8,
    createdAt: '2026-06-01T08:00:00Z',
  },
];

export const activeCampaigns: ActiveCampaign[] = [
  { id: 'ac-1', name: 'LinkedIn — Agency Decision Makers', platform: 'linkedin', status: 'active', budget: 1500, spent: 1120, currency: 'AUD', impressions: 45200, reach: 28400, clicks: 890, leads: 28, ctr: 1.97, cpl: 40.0, conversionRate: 21.4, roi: 4.2 },
  { id: 'ac-2', name: 'Meta — Sydney Property Managers', platform: 'facebook', status: 'active', budget: 800, spent: 620, currency: 'AUD', impressions: 68400, reach: 42100, clicks: 1240, leads: 18, ctr: 1.81, cpl: 34.4, conversionRate: 16.7, roi: 3.1 },
  { id: 'ac-3', name: 'TikTok — PropTech Shorts', platform: 'tiktok', status: 'active', budget: 700, spent: 580, currency: 'AUD', impressions: 128000, reach: 95000, clicks: 2100, leads: 8, ctr: 1.64, cpl: 72.5, conversionRate: 8.2, roi: 1.4 },
  { id: 'ac-4', name: 'Instagram — Maintenance Pain Points', platform: 'instagram', status: 'active', budget: 500, spent: 340, currency: 'AUD', impressions: 32100, reach: 21800, clicks: 520, leads: 12, ctr: 1.62, cpl: 28.3, conversionRate: 19.5, roi: 3.8 },
  { id: 'ac-5', name: 'Google — Inspection Software', platform: 'google', status: 'paused', budget: 600, spent: 420, currency: 'AUD', impressions: 12400, reach: 9800, clicks: 380, leads: 6, ctr: 3.06, cpl: 70.0, conversionRate: 12.0, roi: 2.0 },
  { id: 'ac-6', name: 'YouTube — Product Demo Shorts', platform: 'youtube', status: 'active', budget: 400, spent: 280, currency: 'AUD', impressions: 56000, reach: 44000, clicks: 890, leads: 5, ctr: 1.59, cpl: 56.0, conversionRate: 15.0, roi: 2.5 },
];

export const optimizationRecommendations: OptimizationRecommendation[] = [
  { id: 'or-1', campaignId: 'ac-3', campaignName: 'TikTok — PropTech Shorts', type: 'budget_adjustment', title: 'Reduce TikTok budget', description: 'CPL 72% above target — reallocate budget to higher-performing Instagram.', currentValue: 'AUD 700', proposedValue: 'AUD 350', status: 'pending', createdAt: '2026-06-07T07:00:00Z' },
  { id: 'or-2', campaignId: 'ac-3', campaignName: 'TikTok — PropTech Shorts', type: 'creative_swap', title: 'Replace underperforming creative', description: 'CTR dropped 40% on Creative B — swap with AI-generated comparison chart.', status: 'pending', createdAt: '2026-06-07T06:30:00Z' },
  { id: 'or-3', campaignId: 'ac-2', campaignName: 'Meta — Sydney Property Managers', type: 'audience_change', title: 'Narrow audience to agency owners', description: 'Exclude tenant-facing roles — focus on principals and office managers.', status: 'approved', createdAt: '2026-06-06T10:00:00Z' },
  { id: 'or-4', campaignId: 'ac-5', campaignName: 'Google — Inspection Software', type: 'pause_campaign', title: 'Pause Google campaign', description: 'ROI below 2.0 threshold for 2 consecutive weeks.', status: 'approved', createdAt: '2026-06-05T14:00:00Z' },
];

export const marketingLeads: MarketingLead[] = [
  { id: 'ml-1', name: 'James Mitchell', email: 'j.mitchell@premierpm.com.au', company: 'Premier Property Management', source: 'linkedin', campaignId: 'ac-1', campaignName: 'LinkedIn — Agency Decision Makers', status: 'assigned', assignedTo: 'Sales — Alex Turner', createdAt: '2026-06-07T10:30:00Z' },
  { id: 'ml-2', name: 'Sarah Lim', email: 'sarah@metroleasing.my', company: 'Metro Leasing KL', source: 'facebook', campaignId: 'ac-2', campaignName: 'Meta — Sydney Property Managers', status: 'new', createdAt: '2026-06-07T09:15:00Z' },
  { id: 'ml-3', name: 'David Chen', email: 'david.chen@eastsidepm.com', company: 'Eastside PM', source: 'instagram', campaignId: 'ac-4', campaignName: 'Instagram — Maintenance Pain Points', status: 'contacted', assignedTo: 'Sales — Nina Patel', createdAt: '2026-06-06T16:00:00Z' },
  { id: 'ml-4', name: 'Emma Wilson', email: 'emma@brisbaneagents.com.au', source: 'google', campaignId: 'ac-5', campaignName: 'Google — Inspection Software', status: 'qualified', assignedTo: 'Sales — Alex Turner', createdAt: '2026-06-05T11:00:00Z' },
];

export const platformIntegrations: PlatformIntegration[] = [
  { platform: 'facebook', status: 'planned', detail: 'Meta Ads API — Facebook & Instagram' },
  { platform: 'instagram', status: 'planned', detail: 'Meta Ads API — shared with Facebook' },
  { platform: 'tiktok', status: 'planned', detail: 'TikTok Ads API' },
  { platform: 'linkedin', status: 'planned', detail: 'LinkedIn Campaign Manager API' },
  { platform: 'google', status: 'planned', detail: 'Google Ads API' },
  { platform: 'youtube', status: 'planned', detail: 'Google Ads API — YouTube campaigns' },
];

export function formatPlatform(platform: string): string {
  return platform.charAt(0).toUpperCase() + platform.slice(1);
}
