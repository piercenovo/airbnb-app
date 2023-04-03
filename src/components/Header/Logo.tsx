'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LogoLg from '../../../public/images/logo-lg.svg'
import LogoMd from '../../../public/images/logo-md.svg'

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
        src={LogoLg}
        priority
      />
      <Image
        onClick={() => router.push('/')}
        alt='logo'
        className='hidden lg:block cursor-pointer'
        height='32'
        width='100'
        src={LogoMd}
        priority
      />
    </>
  )
}
