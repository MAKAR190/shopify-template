/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    domains: [
      "api.microlink.io", 
    ],
  },
};

export default nextConfig;
