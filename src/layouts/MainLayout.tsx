import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
interface Props {
  children?: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div className='bg-blue-100 dark:bg-secondary-dark  '>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
