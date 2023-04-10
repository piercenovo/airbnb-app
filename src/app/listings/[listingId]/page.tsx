import getCurrentUser from '@/actions/getCurrentUser'
import getListingById from '@/actions/getListingById'
import getReservations from '@/actions/getReservations'
import { EmptyState } from '@/components/EmptyState'
import { ListingClient } from './ListingClient'

interface IParams {
  listingId?: string
}

export default async function ListingPage ({ params }: { params: IParams }) {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()
  const reservations = await getReservations(params)

  if (!listing) {
    return (
      <EmptyState />
    )
  }
  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  )
}
