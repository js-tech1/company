/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["js-tech1.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "js-tech1.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
