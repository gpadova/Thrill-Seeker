/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos.skyscnr.com',
        port: "",
        pathname: "/images/airlines/**"
      },
    ],
  },
  experimental: {
    appDir: true
  },
}

module.exports = nextConfig
