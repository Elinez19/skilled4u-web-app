import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@skilled4u/shared", "@skilled4u/database", "@skilled4u/ui"],
};

export default nextConfig;
