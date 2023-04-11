import getCurrentUser from '@/actions/getCurrentUser'
import getListings, { type IListingsParams } from '@/actions/getListings'
import { Container } from '@/components/Container'
import { EmptyState } from '@/components/EmptyState'
import { ListingCard } from '@/components/Listings/ListingCard'

interface HomeProps {
  searchParams: IListingsParams
}

export default async function HomePage ({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <EmptyState showReset />
    )
  }

  return (
    <Container>
      <div
        className='
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        '
      >
        {listings.map((listing) => {
          return (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          )
        })}
      </div>
    </Container>
  )
}
