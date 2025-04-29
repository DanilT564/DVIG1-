/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Полностью отключаем оптимизацию изображений для предотвращения ошибок 502
    unoptimized: true,
    remotePatterns: [],
  },
  // Настройка для Render
  output: 'standalone',
}

module.exports = nextConfig 