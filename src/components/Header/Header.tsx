'use client'

import { type SafeUser } from '@/types'
import { Container } from '../Container'
import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'

interface HeaderProps {
  currentUser?: SafeUser | null
}

export const Header: React.FC<HeaderProps> = ({
  currentUser
}) => {
  return (
    <header className='fixed w-full bg-white z-10 shadow-sm'>
      <div
        className='
          py-4
          px-2 md:px-0
          border-b-[1px]
        '
      >
        <Container>
          <nav
            className='
      flex flex-row
      items-center
      justify-between
      gap-3
      md:gap-0
    '
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </nav>
        </Container>
      </div>
    </header>
  )
}
