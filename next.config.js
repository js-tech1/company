/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["js-tech1.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "company-sandy-ten.vercel.app",
        pathname: '/**',
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
