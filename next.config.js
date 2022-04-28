const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.vlpt.us'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    plugins: ['react-hooks'],
    rules: [{ 'react-hooks/rules-of-hooks': 'warning' }],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/reviews',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
