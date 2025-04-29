import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'ООО "СПЕКТР" | Собственная сборка двигателей ЗМЗ/УМЗ',
  description: 'Восстановленные двигатели ЗМЗ и УМЗ для организаций с автопарком ГАЗ/УАЗ. Сдайте старый - получите восстановленный.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
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