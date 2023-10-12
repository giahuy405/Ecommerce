import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: any
  autoComplete?: string | undefined
}
const CustomInput = ({ type, errorMessage, placeholder, className, name, register, rules ,autoComplete}: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className='w-full dark:text-white border rounded-md p-3 dark:bg-third-dark outline-none dark:border-primary-dark'
      />
      <div className='text-red-500 text-[13px] min-h-[28px]'>{errorMessage}</div>
    </div>
  )
}

export default CustomInput
