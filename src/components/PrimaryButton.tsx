import { ButtonHTMLAttributes } from 'react'
import { SpinnerIcon } from './Icon'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type: 'button' | 'submit' | 'reset' | undefined
  isLoading?: boolean
  spinnerClass: string | undefined
}
const PrimaryButton = ({ className, type, isLoading, disabled, children, spinnerClass, ...rest }: Props) => {
  const newClassName = disabled ? className + 'cursor-not-allow' : className
  return (
    <button
      type={type}
      className={`rounded-md bg-blue-500 text-white hover:bg-blue-600 myBlueshadow ${newClassName}`}
      disabled={disabled}
      {...rest}
    >
      {isLoading && <SpinnerIcon className={spinnerClass} />}
      {children}
    </button>
  )
}

export default PrimaryButton
