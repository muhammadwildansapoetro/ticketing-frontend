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
        hostname: "res.cloudinary.com",
      },
      { hostname: "w7.pngwing.com" },
    ],
  },
};

export default nextConfig;
