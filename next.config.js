/** @type {import('next').NextConfig} */
const nextConfig = {
  // Генерируем полностью статический сайт вместо серверного приложения
  output: 'export',
  // Отключаем обработку изображений
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
  // Отключаем минификацию для исключения возможных проблем
  swcMinify: false,
  // Отключаем строгий режим React
  reactStrictMode: false,
  // Убираем расширения файлов в URL
  trailingSlash: true,
}

module.exports = nextConfig 