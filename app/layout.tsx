import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'FatooraX',
  description: 'Advanced electronic invoicing solution compliant with tax regulations',
  generator: 'Next.js',
  keywords: ['e-invoicing', 'electronic invoice', 'tax compliance', 'business solution'],
  authors: [{ name: 'FatooraX Team' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
