import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'DVIG Shop',
  description: 'DVIG - Интернет-магазин двигателей',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 