'use client'

import Image from 'next/image'

interface AvatarProps {
  src?: string | null | undefined
  big?: boolean
  classname?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  big,
  classname
}) => {
  return (
    <Image
      className={`rounded-full ${classname}`}
      width={big ? '62' : '36'}
      height={big ? '62' : '36'}
      alt='Avatar'
      src={src || '/images/avatar.svg'}
      priority
    />
  )
}
