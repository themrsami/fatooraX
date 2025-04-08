import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fatoora-X - Electronic Invoicing Solution',
  description: 'Advanced electronic invoicing solution compliant with tax regulations',
  generator: 'Next.js',
  keywords: ['e-invoicing', 'electronic invoice', 'tax compliance', 'business solution'],
  authors: [{ name: 'Fatoora-X Team' }],
  viewport: 'width=device-width, initial-scale=1',
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
