'use client'

import { useCallback } from 'react'
import { MinusIcon, PlusIcon } from '../Icons'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

export const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }

    onChange(value - 1)
  }, [value, onChange])

  return (
    <div
      className='flex flex-row items-center justify-between'
    >
      <div className='flex flex-col'>
        <div className='font-medium'>
          {title}
        </div>
        <div className='font-light text-gray-600'>
          {subtitle}
        </div>
      </div>
      <div className='flex flex-row items-center gap-4 select-none'>
        <div
          onClick={onReduce}
          className='w-8 h-8 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-90 transition'
        >
          <MinusIcon className='w-4' />
        </div>
        <div className='font-light text-lg w-4 text-neutral-600 flex justify-center'>
          {value}
        </div>
        <div
          onClick={onAdd}
          className='w-8 h-8 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-90 transition'
        >
          <PlusIcon className='w-4' />
        </div>
      </div>
    </div>
  )
}
