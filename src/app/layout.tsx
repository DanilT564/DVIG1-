import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'ООО "СПЕКТР" | Собственная сборка двигателей ЗМЗ/УМЗ',
  description: 'Собственная сборка двигателей ЗМЗ/УМЗ. Коммерческое предложение по восстановленным двигателям для организаций с автопарком ГАЗ/УАЗ.',
}

// Убедимся, что генерируем статические маршруты
export const dynamic = 'force-static';
export const dynamicParams = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 