'use client'

import { Container } from '../Container'
import { Navbar } from './Navbar'

export function Header () {
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
          <Navbar />
        </Container>
      </div>
    </header>
  )
}
