import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from Sanity and Unsplash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },

  // New Next.js 15 top-level turbopack key for 3D models
  turbopack: {
    rules: {
      "*.glb": {
        loaders: ["url-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;