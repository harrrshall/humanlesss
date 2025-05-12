/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you want to use Next.js default image optimization on Vercel:
  // images: {
  //   unoptimized: false, // Or simply remove the entire 'images' block
  // },

  // Or if you still want them unoptimized:
  images: {
    unoptimized: true,
  }

  // Add other configurations if you have them
  // reactStrictMode: true,
};

module.exports = nextConfig;