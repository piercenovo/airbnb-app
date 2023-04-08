'use client'

import { Container } from '@/components/Container'
import { ListingHead } from '@/components/Listings/ListingHead'
import { ListingInfo } from '@/components/Listings/ListingInfo'
import { categories } from '@/data/categories'
import { type SafeListing, type SafeUser } from '@/types'
import { Reservation } from '@prisma/client'
import { useMemo } from 'react'

interface ListingClientProps {
  reservations?: Reservation[]
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

export const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6 px-2 sm:px-4 md:px-0 mx-auto'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
