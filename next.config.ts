/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // এটি GitHub Pages-এর জন্য মাস্ট
  basePath: '/marieauwu-portfolio',
  assetPrefix: '/marieauwu-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;