'use client'

import { type IconType } from '@/types'

interface CategoryInputProps {
  icon: React.FC<IconType>
  label: string
  selected?: boolean
  onClick: (value: string) => void
}

export const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
    >
      <Icon className='w-6' />
      <div className='font-semibold'>
        {label}
      </div>
    </div>
  )
}
