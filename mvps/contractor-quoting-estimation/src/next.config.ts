import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.r2.cloudflarestorage.com",
      },
    ],
  },
  serverExternalPackages: ["bcrypt", "@prisma/client", "pg", "@react-pdf/renderer", "twilio"],
};

export default nextConfig;
