/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PIXELS_API_KEY: process.env.PIXELS_API_KEY,
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
