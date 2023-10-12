import React from 'react'
interface Props{
    children?:React.ReactNode
}
const RegisterLayout = ({children}:Props) => {
  return (
    <div className='bg-blue-100 dark:bg-secondary-dark w-screen h-screen pt-10 '>
        {children}
      
    </div>
  )
}

export default RegisterLayout