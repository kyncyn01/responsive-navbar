/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = withPWA({
  reactStrictMode: true,
   swcMinify: true,
  productionBrowserSourceMaps: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  },
});

//module.exports = nextConfig
module.exports = {
  pwa: {
    dest: 'public',
    mode: 'production', // Force production build
    // Other options...
  },
  // Other configuration...
}
