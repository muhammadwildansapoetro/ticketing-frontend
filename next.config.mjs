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
<<<<<<< HEAD
      {
        hostname: "static.vecteezy.com"

      },
=======
      { hostname: "w7.pngwing.com" },
>>>>>>> 9cbd8aa7dc8dbd4544683cdc4a38015cc98f591b
    ],
  },
};

export default nextConfig;
