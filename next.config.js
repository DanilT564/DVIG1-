/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Отключаем оптимизацию изображений для упрощения локальной разработки
    // В рабочей среде лучше использовать оптимизированные изображения
    unoptimized: true,
    domains: [],
    // Добавьте домены, с которых планируете загружать изображения (если нужно)
    // domains: ['example.com', 'cdn.example.com'],
  },
  // Настройка для Render
  output: 'standalone',
}

module.exports = nextConfig 