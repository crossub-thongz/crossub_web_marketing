export const ROUTES = {
  LOGIN: '/login',
  COMMAND_CENTER: '/command-center',
  MARKETS: '/markets',
  INTELLIGENCE: '/intelligence',
  STRATEGY: '/strategy',
  CONTENT: '/content',
  ASSETS: '/assets',
  BUDGET: '/budget',
  APPROVALS: '/approvals',
  CAMPAIGNS: '/campaigns',
  OPTIMIZATION: '/optimization',
  LEADS: '/leads',
  AI_ASSISTANT: '/ai-assistant',
} as const;

const PUBLIC = new Set<string>(['/', ROUTES.LOGIN]);

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC.has(pathname);
}
