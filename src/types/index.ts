import { type Reservation, type Listing, type User } from '@prisma/client'

export type SafeListing = Omit<
Listing,
'createdAt'
> & {
  createdAt: string
}

export type SafeUser = Omit<
User,
'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}

export type SafeReservation = Omit<
Reservation,
'createdAt' | 'startDate' | 'endDate' | 'listing'
> & {
  createdAt: string
  startDate: string
  endDate: string
  listing: SafeListing
}

export interface IconType {
  className?: string
}

export interface CountrySelectValue {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}
