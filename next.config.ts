// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   allowedDevOrigins: ["192.168.1.25"],
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
 
module.exports = nextConfig;
