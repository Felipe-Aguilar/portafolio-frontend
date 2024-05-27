import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Aguilar - Front End Developer',
  description: 'Ingeniero en informática, especializado en el desarrollado Front-End.',
  openGraph: {
    title: `Felipe Aguilar - Portafolio Front-End Developer`,
    description: `¡Hola! Te comparto mi portafolio como desarrollador Front-End, conoce mi experiencia laboral y los desarrollos que he tenido a lo largo de mi experiencia laboral.`,
    url: 'https://felipe-aguilar-portafolio.vercel.app/',
    siteName: 'felipe-aguilar-portafolio.vercel.app',
    images: [
        {
            url: 'https://felipe-aguilar-portafolio.vercel.app/_next/image?url=%2Fimagenes%2Fpersonal-personal.webp&w=1200&q=75',
            width: 300,
            height: 266,
        },
    ],
    locale: 'es_MEX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />

        <GoogleTagManager gtmId='GTM-TQQ7GPXN'/>
      </body>
    </html>
  )
}
