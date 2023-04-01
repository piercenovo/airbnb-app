import './globals.css'
import { Nunito } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { RegisterModal } from '@/components/Modals/RegisterModal'
import { ToasterProvider } from '@/providers/ToasterProvider'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb App, build with Next.js, Tailwind, Prisma and MongoDB. 🚀'
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Header />
        {children}
      </body>
    </html>
  )
}
