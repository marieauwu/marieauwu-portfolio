import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // স্ট্যাটিক বিল্ডের জন্য
  basePath: '/marieauwu-portfolio',
  assetPrefix: '/marieauwu-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;