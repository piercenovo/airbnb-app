import { STEPS } from '@/enums/steps'
import { useMemo, useState } from 'react'
import { useRentModal } from './useRentModal'

export function useActionRentModal () {
  const rentModal = useRentModal()
  const isOpen = rentModal.isOpen
  const onClose = rentModal.onClose

  const [step, setStep] = useState(STEPS.CATEGORY)

  const onBack = () => {
    setStep((value) => value - 1)
  }

  const onNext = () => {
    setStep((value) => value + 1)
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step])

  const secondaryAction = step === STEPS.CATEGORY ? undefined : onBack

  return { isOpen, onClose, actionLabel, secondaryActionLabel, secondaryAction, step, onNext, setStep, rentModal }
}
