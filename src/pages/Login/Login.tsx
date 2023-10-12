import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import BrandLogo from 'src/components/BrandLogo'
import CustomInput from 'src/components/Input/CustomInput'
import PrimaryButton from 'src/components/PrimaryButton'
import { loginSchema, LoginSchema } from 'src/utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    }
  )
  return (
    <div className='mx-auto bg-white dark:bg-primary-dark p-5 max-w-[350px]  rounded-2xl shadow-lg px-8 py-8'>
      <form noValidate onSubmit={onSubmit}>
        <h2 className='font-bold text-center text-xl mt-4 dark:text-white'>ĐĂNG NHẬP</h2>
        <BrandLogo className='w-14 h-14' figureClassName='mt-3 mb-9' />

        <CustomInput
          type='email'
          placeholder='Email'
          name='email'
          register={register}
          className=''
          errorMessage={errors.email?.message}
        />
        <CustomInput
          type='password'
          placeholder='Mật khẩu'
          name='password'
          register={register}
          className=''
          errorMessage={errors.password?.message}
        />

        <PrimaryButton type='submit' content='Đăng nhập' className='w-full mt-2' />

        <div className='text-center mt-7  text-gray-300 text-sm'>
          Chưa có tài khoản?{' '}
          <Link className='text-blue-500 hover:text-blue-700' to='/register'>
            {' '}
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
