import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/about",
  //       permanent: true,
  //     },
  //     {
  //       source: "/services",
  //       destination: "/services",
  //       permanent: true,
  //     },
  //     {
  //       source: "/contact",
  //       destination: "/contact",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
