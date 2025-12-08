/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // Disable server-based image optimization (shared hosting is weak at this)
  images: {
    unoptimized: true,
  },

  // Boost caching and performance for static files
  compress: true,

  // Disable telemetry (optional but cleaner)
  telemetry: false,
};

export default nextConfig;
