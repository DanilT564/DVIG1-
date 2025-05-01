import './globals.css'

export const metadata = {
  title: 'DVIG Shop',
  description: 'DVIG - Online Shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 