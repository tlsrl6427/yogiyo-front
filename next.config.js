//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://15.164.251.95:8080/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;