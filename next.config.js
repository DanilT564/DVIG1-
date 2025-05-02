/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Отключаем статическую генерацию для страниц, использующих аутентификацию
  output: "standalone",
  // Опции для обхода проблем с маршрутизацией
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig 