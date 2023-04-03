'use client'

import { categories } from '@/data/categories'
import { useActionRentModal } from '@/hooks/useActionRentModal'
import { FieldValues, useForm } from 'react-hook-form'
import { Heading } from '../Heading'
import { CategoryInput } from '../Inputs/CategoryInput'
import { Modal } from './Modal'

export const RentModal = () => {
  const { isOpen, onClose, actionLabel, secondaryActionLabel, secondaryAction } = useActionRentModal()

  const {
    setValue,
    watch
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: ''
    }
  })

  const category = watch('category')

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  const bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Which of these best describes your place?'
        subtitle='Pick a category'
      />
      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto category-list'
      >
        {categories.map(item => (
          <div key={item.label} className='col-span-1'>
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={secondaryAction}
      title='Airbnb your home!'
      body={bodyContent}
    />
  )
}
