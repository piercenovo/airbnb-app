'use client'

import { Logo } from './Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'

export function Navbar () {
  return (
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
      <UserMenu />
    </nav>
  )
}
