/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "thumbor.prod.vidiocdn.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "icons.veryicon.com",
      },
    ],
  },
};

export default nextConfig;
