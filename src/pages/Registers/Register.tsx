import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
 
  return (
    <div className='mx-auto bg-white dark:bg-red-300  p-5 max-w-[350px]  rounded-2xl shadow-lg px-8 py-8'>
      <form noValidate>
        <h2 className='font-bold text-center text-xl mt-4'>ĐĂNG KÝ</h2>
        <figure className='mt-4 mb-12'>
          <img
            className='w-14 h-14 mx-auto myBlueshadow rounded-full overflow-hidden'
            src='./src/assets/mylogo2.png'
            alt=''
          />
        </figure>
        <input type='email' {...register('email')} placeholder='Email' className='w-full border rounded-md p-2 ' />
        <input
          placeholder='Mật khẩu'
          type='password'
          {...register('password')}
          className='w-full border rounded-md p-2 mt-5 '
        />
        <input
          placeholder='Xác thực mật khẩu'
          type='password'
          {...register('confirmPassword')}
          className='w-full border rounded-md p-2 mt-5 '
        />
        <button className='rounded-3xl bg-blue-500 text-white w-full p-2.5 hover:bg-blue-700 myBlueshadow mt-5'>
          Đăng ký
        </button>
        <div className='text-center mt-7  text-gray-300 text-sm'>
          Đã có tài khoản?{' '}
          <Link className='text-blue-500 hover:text-blue-700' to='/login'>
            {' '}
            Đăng nhập
          </Link>
        </div>
      </form>

      
    </div>
  )
}

export default Register
