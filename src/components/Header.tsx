import React, { useContext, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { CartIcon, LanguageIcon, SearchIcon } from './Icon'
import Popover from './Popover'
import { AppContext } from 'src/context/app.context'
import { removeAccessTokenLS } from 'src/utils/auth'
import { useMutation } from 'react-query'
import { logoutAccount } from 'src/apis/auth.api'

const Header = () => {
  const { setIsAuthenticate ,isAuthenticated} = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationFn:logoutAccount,
    onSuccess:()=>{
      setIsAuthenticate(false)
    }
  })
  
 
  return (
    <header className='bg-white py-4 dark:bg-primary-dark lg:py-5'>
      <div className='container'>
        <div className='grid grid-cols-12'>
          <a className='col-span-6 flex max-w-max items-center md:col-span-3' href='/'>
            <BrandLogo figureClassName='w-10 h-10' />
            <span className='white-space-nowrap fs-16 ml-2 font-bold  md:fs-18 md:ml-3 lg:fs-22 text-blue-500 dark:text-white'>
              Gia Huy
            </span>
          </a>
          <div className='col-span-6 flex items-center justify-end gap-3 md:col-span-9 md:gap-4'>
            <form className='hidden h-9 w-[400px] items-center overflow-hidden rounded-8 border border-secondary-EDEDF6 bg-white px-4 transition-colors focus-within:border-secondary-9E9DA8 md:flex lg:h-10 rounded dark:bg-third-dark dark:border-none dark:text-white'>
              <input
                type='text'
                placeholder='Tìm kiếm theo tên sản phẩm, danh mục'
                className='flex-grow border-none bg-transparent outline-none placeholder:fs-14 '
                name='name'
              />
              <button className='flex-shrink-0 rounded-8 '>
                <SearchIcon />
              </button>
            </form>
            <Popover
              placement='bottom'
              renderPopover={
                <div className='bg-white rounded-lg border p-1.5 shadow-lg dark:bg-primary-dark dark:border-secondary-dark'>
                  <ul>
                    <li className='hover:dark:hover:bg-third-dark pl-3 pr-6 py-1.5 rounded-md cursor-pointer  dark:text-white flex items-center gap-3 justify-between hover:bg-slate-200'>
                      <img src='http://picsum.photos/50/50' alt='' />
                      <p>Sản phẩm</p>
                      <p>2.500</p>
                    </li>
                   
                  </ul>
                </div>
              }
            >
              <div className='relative h-8 w-8 cursor-pointer  hover:border-secondary-9E9DA8 md:h-9 md:w-9 lg:h-10 lg:w-10 flex items-center justify-center hover:bg-slate-100 rounded dark:text-white dark:hover:bg-third-dark'>
                <CartIcon />
              </div>
            </Popover>
            <Popover
              placement='bottom'
              renderPopover={
                <div className='bg-white rounded-lg border p-1.5 shadow-lg dark:bg-primary-dark dark:border-secondary-dark'>
                  <ul>
                    <li className='hover:bg-slate-100 pl-3 pr-6 py-1.5 rounded-md cursor-pointer  dark:text-white dark:hover:bg-third-dark'>
                      Vietnamese
                    </li>
                    <li className='hover:bg-slate-100 pl-3 pr-6 py-1.5 rounded-md cursor-pointer  dark:text-white dark:hover:bg-third-dark'>
                      English
                    </li>
                  </ul>
                </div>
              }
            >
              <div className='flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-8  hover:bg-slate-100 rounded  md:h-9 md:w-9 lg:h-10 lg:w-10 dark:text-white dark:hover:bg-third-dark'>
                <LanguageIcon />
              </div>
            </Popover>
           {!isAuthenticated &&  <Link to='/login'>
              <PrimaryButton type='button' content='Đăng nhập' className='p-2 px-3' />
            </Link>}
            {isAuthenticated && <div className='dark:text-white cursor-pointer ' onClick={()=>logoutMutation.mutate()}>
              Đăng xuất</div>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
