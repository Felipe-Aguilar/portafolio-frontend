import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Aguilar - Front End Developer',
  description: 'Ingeniero en informática, especializado en el desarrollado Front-End.',
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
        <GoogleAnalytics measurementId='G-7KJJHHM3R9'/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
