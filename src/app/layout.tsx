import getCurrentUser from '@/actions/getCurrentUser'
import { Header } from '@/components/Header/Header'
import { LoginModal } from '@/components/Modals/LoginModal'
import { RegisterModal } from '@/components/Modals/RegisterModal'
import { RentModal } from '@/components/Modals/RentModal'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb App, build with Next.js, Tailwind, Prisma and MongoDB. 🚀'
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Header currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
