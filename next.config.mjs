/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thumbor.prod.vidiocdn.com",
      },
    ],
  },
};

export default nextConfig;
