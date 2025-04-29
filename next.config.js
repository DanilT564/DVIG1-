/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
  // Настройка для Render
  output: 'standalone',
}

module.exports = nextConfig 