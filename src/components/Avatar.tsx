'use client'

import Image from 'next/image'

export function Avatar () {
  return (
    <Image
      className='rounded-full'
      height='36'
      width='36'
      alt='Avatar'
      src='/images/avatar.svg'
      priority
    />
  )
}
