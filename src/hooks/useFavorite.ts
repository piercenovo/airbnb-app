import { toast } from 'react-hot-toast'
import { SafeUser } from './../types/index'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useCallback, useMemo } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface IUserFavorite {
  listingId: string
  currentUser?: SafeUser | null
}

export function useFavorite ({
  listingId,
  currentUser
}: IUserFavorite) {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(async (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation()

    if (!currentUser) {
      return loginModal.onOpen()
    }

    try {
      let request

      if (hasFavorited) {
        request = async () => await axios.delete(`/api/favorites/${listingId}`)
      } else {
        request = async () => await axios.post(`/api/favorites/${listingId}`)
      }

      await request()
      router.refresh()
      toast.success('Success')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }, [currentUser, hasFavorited, listingId, loginModal, router])

  return { hasFavorited, toggleFavorite }
}
