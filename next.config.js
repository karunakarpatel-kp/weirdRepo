/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL,
    GOOGLE_ADSENSE_ID: process.env.GOOGLE_ADSENSE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

module.exports = nextConfig;

// BLOG_PAGE_BASE_URL=https://www.karunakarpatel.com/Blog
// HOME_PAGE_BASE_URL=https://www.karunakarpatel.com
// GOOGLE_ADSENSE_ID=ca-pub-2687924945894784
