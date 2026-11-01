/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    '/privacy': ['./content/legal/**'],
    '/terms': ['./content/legal/**'],
    '/AU/privacy': ['./content/legal/**'],
    '/NZ/privacy': ['./content/legal/**'],
    '/AU/terms': ['./content/legal/**'],
    '/NZ/terms': ['./content/legal/**'],
  },
  async redirects() {
    return [
      { source: '/help_center', destination: '/help', permanent: true },
      { source: '/privacy_policy', destination: '/privacy', permanent: true },
    ];
  },
};

export default nextConfig;
