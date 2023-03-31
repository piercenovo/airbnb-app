'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Logo () {
  const router = useRouter()

  return (
    <>
      <Image
        onClick={() => router.push('/')}
        alt='logo'
        className='hidden md:block lg:hidden cursor-pointer'
        height='32'
        width='32'
        src='/images/logo-lg.svg'
        priority
      />
      <Image
        onClick={() => router.push('/')}
        alt='logo'
        className='hidden lg:block cursor-pointer'
        height='32'
        width='100'
        src='/images/logo-md.svg'
        priority
      />
    </>
  )
}
