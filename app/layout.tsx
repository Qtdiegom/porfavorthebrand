import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dm = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Por Favor The Brand | Wear Cultura',
  description: 'Mexican-American streetwear. Born in the barrio, built for the world.',
  openGraph: {
    title: 'Por Favor The Brand | Wear Cultura',
    description: 'Mexican-American streetwear. Born in the barrio, built for the world.',
    siteName: 'Por Favor The Brand',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${dm.variable} ${playfair.variable}`}>
      <body className="grain">
        {children}
      </body>
    </html>
  )
}
