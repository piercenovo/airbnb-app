'use client'
import { useLoginModal } from '@/hooks/useLoginModal copy'
import { signIn } from 'next-auth/react'
// import { useRegisterModal } from '@/hooks/useRegisterModal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { GithubIcon, GoogleIcon } from '../Icons'
import { Input } from '../Inputs/Input'
import { Modal } from './Modal'

export function LoginModal () {
  const router = useRouter()
  // const registerModal = useRegisterModal()
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
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false
    })
      .then((callback) => {
        setIsLoading(false)

        if (callback?.ok) {
          toast.success('Logged in successfully')
          router.refresh()
          loginModal.onClose()
        }

        if (callback?.error) {
          toast.error(callback.error)
        }
      })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='Welcome back'
        subtitle='Login to your account!'
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
          <div className='text-neutral-800 cursor-pointer hover:underline'>
            Log in
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
