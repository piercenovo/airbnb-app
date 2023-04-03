import { IconProps } from '@/types'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: React.FC<IconProps>
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative 
        disabled:opacity-70 
        disabled:cursor-not-allowed 
        rounded-lg 
        transition w-full
        border-[1px]
        ${outline ? 'bg-white' : 'bg-primary'}
        ${outline ? 'border-black' : 'bg-primary'}
        ${outline ? 'hover:bg-zinc-100' : 'hover:bg-primary/90'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'text-sm' : 'text-base'}
      `}
    >
      {Icon && (
        <Icon
          className='
          absolute left-4 top-3 w-6
          '
        />
      )}
      {label}
    </button>
  )
}
