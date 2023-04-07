'use client'

import { useFavorite } from '@/hooks/useFavorite'
import type { SafeUser } from '@/types'
import { OutlineHeartIcon, SolidHeartIcon } from './Icons'

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}

export const HeartButton: React.FunctionComponent<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({ listingId, currentUser })

  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transiton cursor-pointer'
    >
      <OutlineHeartIcon className='w-7 fill-white absolute -top-[2px] -right-[2px]' />
      <SolidHeartIcon className={`w-6  ${hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}`} />
    </div>
  )
}
