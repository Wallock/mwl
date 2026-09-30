import type { NextConfig } from "next";

// Allow self-signed/unverified certs in local dev only
if (process.env.NODE_ENV !== "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.maidwonderland.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
