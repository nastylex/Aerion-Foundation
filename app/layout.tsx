import type { Metadata, Viewport } from 'next'
import './globals.css'
import PrivacyConsent from '@/components/privacy-consent'

export const metadata: Metadata = {
  title: 'AERION Foundation Uganda.',
  description: 'AERION Foundation Uganda is building more human, inclusive digital experiences for the future of technology.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#141414' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PrivacyConsent />
        {children}
      </body>
    </html>
  )
}
