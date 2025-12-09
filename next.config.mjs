/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Disable image optimization to fix 502 errors in production
  },
};

export default nextConfig;
