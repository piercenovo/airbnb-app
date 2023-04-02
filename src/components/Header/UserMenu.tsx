'use client'

import { useLoginModal } from '@/hooks/useLoginModal copy'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { type SafeUser } from '@/types'
import { signOut } from 'next-auth/react'
import { useCallback, useState } from 'react'
import { Avatar } from '../Avatar'
import { MenuIcon } from '../Icons'
import { MenuItem } from './MenuItem'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

export const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          '
        >
          Airbnb your home
        </div>
        <div
          onClick={handleToggle}
          className='
            p-4
            md:py-1 md:px-2
            border-[1px]
            border-neutral-200
            flex flex-row
            items-center
            gap-[0.4rem]
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          '
        >
          <MenuIcon className='w-5' />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-14
            text-sm
          '
        >
          <div onClick={handleToggle} className='flex flex-col cursor-pointer'>
            {currentUser
              ? (
                <>
                  <MenuItem
                    onClick={() => {}}
                    label='My trips'
                  />
                  <MenuItem
                    onClick={() => {}}
                    label='My favorites'
                  />
                  <MenuItem
                    onClick={() => {}}
                    label='My reservations'
                  />
                  <MenuItem
                    onClick={() => {}}
                    label='My properties'
                  />
                  <MenuItem
                    onClick={() => {}}
                    label='Airbnb my home'
                  />
                  <hr />
                  <MenuItem
                    onClick={async () => await signOut()}
                    label='Logout'
                  />
                </>
                )
              : (
                <>
                  <MenuItem
                    onClick={loginModal.onOpen}
                    label='Login'
                  />
                  <MenuItem
                    onClick={registerModal.onOpen}
                    label='Sign Up'
                  />
                </>
                )}

          </div>
        </div>
      )}
    </div>
  )
}
