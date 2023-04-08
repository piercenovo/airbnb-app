import { useCountries } from '@/hooks/useCountries'
import { SafeUser } from '@/types'
import Image from 'next/image'
import { Heading } from '../Heading'
import { HeartButton } from '../HeartButton'

interface ListingHeadProps {
  title: string
  imageSrc: string
  locationValue: string
  id: string
  currentUser?: SafeUser | null
}

export const ListingHead: React.FunctionComponent<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries()

  const location = getByValue(locationValue)

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div
        className='
          w-full h-[40vh] md:h-[60vh]
          mx-auto
          overflow-hidden
          rounded-xl
          relative
        '
      >
        <Image
          fill
          alt='Image'
          src={imageSrc}
          className='object-cover w-full'
        />
        <div className='absolute top-5 right-5'>
          <HeartButton
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
  )
}
