/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  // Ensure Fast Refresh is enabled (default is true)
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig

