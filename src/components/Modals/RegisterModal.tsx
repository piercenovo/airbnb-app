'use client'

import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { GithubIcon, GoogleIcon } from '../Icons'
import { Input } from '../Inputs/Input'
import { Modal } from './Modal'

export function RegisterModal () {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        toast.success('Success!')
        registerModal.onClose()
        loginModal.onOpen()
      })
      .catch((error) => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onToggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [registerModal, loginModal])

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome to Airbnb'
        subtitle='Create an account!'
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={GoogleIcon}
        onClick={async () => await signIn('google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={GithubIcon}
        onClick={async () => await signIn('github')}
      />
      <div
        className='
          text-neutral-500
          text-center
          mt-4
          font-light
        '
      >
        <div className='flex flex-row items-center justify-center gap-2'>
          <div>
            Already have an account?
          </div>
          <div
            onClick={onToggle}
            className='text-neutral-800 cursor-pointer hover:underline'
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
