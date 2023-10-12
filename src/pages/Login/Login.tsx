import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import BrandLogo from 'src/components/BrandLogo'
import CustomInput from 'src/components/Input/CustomInput'
import PrimaryButton from 'src/components/PrimaryButton'
import { loginSchema, LoginSchema } from 'src/utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginAccount } from 'src/apis/auth.api'
import { useMutation } from 'react-query'
import { SuccessResponseApi } from 'src/types/utils.type'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { useContext } from 'react'
import { AppContext } from 'src/context/app.context'

type FormData = LoginSchema
const Login = () => {
  const { setIsAuthenticate } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticate(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<SuccessResponseApi<Omit<FormData, 'confirmPassword'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  return (
    <div className='mx-auto bg-white dark:bg-primary-dark p-5 max-w-[350px]  rounded-2xl shadow-lg px-8 py-8'>
      <form noValidate onSubmit={onSubmit}>
        <h2 className='font-bold text-center text-xl mt-4 dark:text-white'>ĐĂNG NHẬP</h2>

        <Link to='/'>
          <BrandLogo className='w-14 h-14' figureClassName='mt-3 mb-9' />
        </Link>

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

        <PrimaryButton
          type='submit'
          className='w-full mt-2 py-3 flex items-center justify-center gap-2'
          isLoading={loginAccountMutation.isLoading}
          disabled={loginAccountMutation.isLoading}
        >
          Đăng nhập
        </PrimaryButton>

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
