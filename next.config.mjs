/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2dakf6mibopp1.cloudfront.net",
        port: "",
        pathname: "/task/images/**",
      },
    ],
  },
};

export default nextConfig;
