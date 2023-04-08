'use client'

import { useCountries } from '@/hooks/useCountries'
import { IconType, type SafeUser } from '@/types'
import dynamic from 'next/dynamic'
import { Avatar } from '../Avatar'
import { ListingCategory } from './ListingCategory'

const Map = dynamic(async () => await import('../Map'), {
  ssr: false
})

interface ListingInfoProps {
  user: SafeUser
  description: string
  guestCount: number
  roomCount: number
  bathroomCount: number
  category: {
    label: string
    icon: React.FC<IconType>
    description: string
  } | undefined
  locationValue: string
}

export const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue
}) => {
  const { getByValue } = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex justify-normal md:justify-between'>
        <div className='flex flex-col w-full'>
          <div
            className='
            text-2xl
            font-semibold
            flex flex-row
            items-center
            justify-between
            w-full
          '
          >
            <span className='line-clamp-2 w-44 md:w-full'>Hosted by {user?.name}</span>
            <Avatar
              big
              src={user?.image}
              classname='flex md:hidden'
            />
          </div>
          <div
            className='
            flex flex-row
            items-center
            text-lg
            gap-2
            font-light
            text-neutral-600
          '
          >
            <span>
              {guestCount} guests
            </span>
            <span>·</span>
            <span>
              {roomCount} rooms
            </span>
            <span>·</span>
            <span>
              {bathroomCount} bathrooms
            </span>
          </div>
        </div>
        <Avatar
          big
          src={user?.image}
          classname='hidden md:flex'
        />
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='text-lg font-light text-neutral-600'>
        {description}
      </div>
      <hr />
      <Map center={coordinates} />
    </div>
  )
}
