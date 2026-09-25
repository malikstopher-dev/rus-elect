import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is fully prerendered (no API routes, no server-side data),
  // so the site ships as a static bundle deployed to a Cloudflare
  // static-assets Worker via `npx wrangler deploy` (see wrangler.jsonc).
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
