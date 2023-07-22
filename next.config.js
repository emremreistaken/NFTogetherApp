/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      domains: ['assets.airstack.xyz'],
      // Optional: If you have a specific path for images, you can specify it here
    },
    webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
      },
}

module.exports = nextConfig