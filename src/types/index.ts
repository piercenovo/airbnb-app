import { User } from '@prisma/client'

export type SafeUser = Omit<
User,
'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}

export interface IconProps {
  className?: string
}

export interface CountrySelectValue {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}
