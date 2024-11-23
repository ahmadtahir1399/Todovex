import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
