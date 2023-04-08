import { type Listing, type User } from '@prisma/client'

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
