import './globals.css'
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'Go Open.no - Åpne lisenser er delingskultur',
  description: 'Åpne lisenser er delingskultur!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
