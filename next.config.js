/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Полностью отключаем оптимизацию изображений для предотвращения ошибок 502
    unoptimized: true,
    remotePatterns: [],
  },
  // Настройка для Render с включением копирования статических файлов
  output: 'standalone',
  experimental: {
    // Это позволит Next.js копировать публичные файлы в standalone директорию
    outputFileTracingRoot: process.cwd(),
  },
}

module.exports = nextConfig 