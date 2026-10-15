/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/help_center', destination: '/help', permanent: true },
      { source: '/privacy_policy', destination: '/privacy', permanent: true },
    ];
  },
};

export default nextConfig;
