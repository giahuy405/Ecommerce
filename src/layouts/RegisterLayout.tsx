import React from 'react'
import ButtonDarkMode from 'src/components/ButtonDarkMode'
interface Props{
    children?:React.ReactNode
}
const RegisterLayout = ({children}:Props) => {
  return (
    <div className='bg-blue-100 dark:bg-secondary-dark w-screen h-screen pt-10 '>
        {children}
        <ButtonDarkMode/>
    </div>
  )
}

export default RegisterLayout