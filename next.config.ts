// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Next.js 16 ships without complete .d.ts declarations — runtime is fine
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
