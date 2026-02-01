import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wormstop - Паразитлардан қутулинг',
  description: 'Wormstop - паразитлар ва гижжадан табиий восита',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
