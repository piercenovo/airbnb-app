import './globals.css'
import { Nunito } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { RegisterModal } from '@/components/Modals/RegisterModal'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { LoginModal } from '@/components/Modals/LoginModal'
import getCurrentUser from '@/actions/getCurrentUser'

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
        <LoginModal />
        <RegisterModal />
        <Header currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
