'use client'

import { type IconType } from '@/types'

interface ListingCategoryProps {
  label: string
  icon: React.FC<IconType>
  description: string
}

export const ListingCategory: React.FC<ListingCategoryProps> = ({
  label,
  icon: Icon,
  description
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-row items-center gap-3'>
        <Icon className='w-10 text-neutral-600' />
        <div className='flex flex-col'>
          <div className='text-lg font-semibold'>
            {label}
          </div>
          <div className='text-neutral-500 font-light'>
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
