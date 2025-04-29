/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем строгий режим для избегания потенциальных проблем в продакшене
  reactStrictMode: false,
  // Использование простой конфигурации для продакшена
  output: 'standalone',
  // Полностью отключаем обработку изображений через next/image
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  // Отключаем минификацию для исключения возможных проблем
  swcMinify: false,
}

module.exports = nextConfig 