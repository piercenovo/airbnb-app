'use client'

import { categories } from '@/data/categories'
import { STEPS } from '@/enums/steps'
import { useActionRentModal } from '@/hooks/useActionRentModal'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { Heading } from '../Heading'
import { CategoryInput } from '../Inputs/CategoryInput'
import { Counter } from '../Inputs/Counter'
import { CountrySelect } from '../Inputs/CountrySelect'
import { ImageUpload } from '../Inputs/ImageUpload'
import { Modal } from './Modal'

export const RentModal = () => {
  const { isOpen, onClose, actionLabel, secondaryActionLabel, secondaryAction, step, onNext } = useActionRentModal()

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
  const location = watch('location')

  const guestCount = watch('guestCount')
  const roomCount = watch('roomCount')
  const bathroomCount = watch('bathroomCount')

  const imageSrc = watch('imageSrc')

  const Map = useMemo(() => dynamic(async () => await import('../Map'), {
    ssr: false
  }), [location])

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true
    })
  }

  let bodyContent = (
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

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Where is your place located?'
          subtitle='Help guests find you!'
        />
        <CountrySelect
          value={location}
          onChange={value => setCustomValue('location', value)}
        />
        <Map
          center={location?.latlng}
        />
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Share some basics about your place'
          subtitle='What amenities do you have?'
        />
        <Counter
          title='Guests'
          subtitle='How many guests do you allow?'
          value={guestCount}
          onChange={value => setCustomValue('guestCount', value)}
        />
        <hr />
        <Counter
          title='Rooms'
          subtitle='How many rooms do you have?'
          value={roomCount}
          onChange={value => setCustomValue('roomCount', value)}
        />
        <hr />
        <Counter
          title='Bathrooms'
          subtitle='How many bathrooms do you have'
          value={bathroomCount}
          onChange={value => setCustomValue('bathroomCount', value)}
        />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='Add a photo of your place'
          subtitle='Show guests what your place looks like!'
        />
        <ImageUpload
          value={imageSrc}
          onChange={value => setCustomValue('imageSrc', value)}
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={secondaryAction}
      title='Airbnb your home!'
      body={bodyContent}
    />
  )
}
