import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import BrandLogo from 'src/components/BrandLogo'
import CustomInput from 'src/components/Input/CustomInput'
import PrimaryButton from 'src/components/PrimaryButton'
import { schema, Schema } from 'src/utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { registerAccount } from 'src/apis/auth.api'
import { omit } from 'lodash'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { SuccessResponseApi } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/context/app.context'
import { path } from 'src/constants/path'

// interface FormData {
//   email: string
//   password: string
//   confirmPassword: string
// }

type FormData = Schema

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const { setIsAuthenticate } = useContext(AppContext)
  const navigate = useNavigate()

  // const rules = getRules(getValues) dùng yup thì không cần dùng rules này
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirmPassword'])
    registerAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticate(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<SuccessResponseApi<Omit<FormData, 'confirmPassword'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirmPassword'>, {
                message: formError[key as keyof Omit<FormData, 'confirmPassword'>],
                type: 'Server'
              })
            })
          }
          // if(formError?.email){
          //   setError('email',{
          //     message:formError.email,
          //     type:"Server"
          //   })
          // }
          // if(formError?.password){
          //   setError('password',{
          //     message:formError.password,
          //     type:"Server"
          //   })
          // }
        }
      }
    })
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirmPassword'>) => registerAccount(body)
  })

  return (
    <div className='container mx-auto bg-white dark:bg-primary-dark  p-5 max-w-[350px] rounded-2xl shadow-lg px-8 py-8'>
      <form noValidate onSubmit={onSubmit}>
        <h2 className='font-bold text-center text-xl mt-4 dark:text-white'>ĐĂNG KÝ</h2>

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

        <CustomInput
          type='password'
          placeholder='Xác thực mật khẩu'
          name='confirmPassword'
          register={register}
          className=''
          errorMessage={errors.confirmPassword?.message}
        />

        <PrimaryButton
          type='submit'
          className='w-full mt-2 py-3 flex items-center justify-center gap-2'
          isLoading={registerAccountMutation.isLoading}
          disabled={registerAccountMutation.isLoading}
        >
          Đăng ký
        </PrimaryButton>

        <div className='text-center mt-7  text-gray-300 text-sm'>
          Đã có tài khoản?{' '}
          <Link className='text-blue-500 hover:text-blue-600' to={path.login}>
            {' '}
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Register
