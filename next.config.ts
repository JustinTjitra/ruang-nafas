/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // ← add the domain here
    dangerouslyAllowSVG: true, 
  },
};

module.exports = nextConfig;