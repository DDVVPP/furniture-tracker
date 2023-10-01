import '../styles/globals.css'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furniture Tracker',
  description: 'Track furniture orders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='main'>{children}</body>
    </html>
  )
}
