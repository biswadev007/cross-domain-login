import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Session from '@/layouts/Session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site A',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Session>
          {children}
        </Session>
      </body>
    </html>
  )
}
