import { EmptyState } from '@/components/EmptyState'
import { TripsClient } from './TripsClient'

import getCurrentUser from '@/actions/getCurrentUser'
import getReservations from '@/actions/getReservations'

export default async function TripsPage () {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    <EmptyState
      title='Unauthorized'
      subtitle='Please login'
    />
  }

  const reservations = await getReservations({
    userId: currentUser?.id
  })

  if (reservations.length === 0) {
    return (
      <EmptyState
        title='No trips found'
        subtitle='Looks like you havent reserved any trips.'
      />
    )
  }

  return (
    <TripsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}
