/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['logo.clearbit.com', 'static.zippia.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/jobs',
      },
    ];
  },
};

module.exports = nextConfig;
