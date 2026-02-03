import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // New Next.js 15 top-level turbopack key
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