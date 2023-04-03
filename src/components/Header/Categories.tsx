'use client'

import { categories } from '@/data/categories'
import { usePathname, useSearchParams } from 'next/navigation'
import { CategoryBox } from '../CategoryBox'
import { Container } from '../Container'

export function Categories () {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()

  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }

  return (
    <Container>
      <div
        className='
          category-list
          pt-4
          flex flex-row
          items-center
          justify-between
          overflow-x-auto
        '
      >
        {categories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}
