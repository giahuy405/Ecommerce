import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='mx-auto bg-white p-5 max-w-[350px]  rounded-2xl shadow-lg px-8 py-8'>
      <form>
        <h2 className='font-bold text-center text-xl mt-4'>ĐĂNG NHẬP</h2>
        <figure className='mt-4 mb-12'>
          <img
            className='w-14 h-14 mx-auto myBlueshadow rounded-full overflow-hidden'
            src='./src/assets/mylogo2.png'
            alt=''
          />
        </figure>
        <input type='email' placeholder='Email' {...register("email")} className='w-full border rounded-md p-2 ' />
        <input type='password' className='w-full border rounded-md p-2 mt-5 ' />
        <button
          type='button'
          className='rounded-3xl bg-blue-500 text-white w-full p-2.5 hover:bg-blue-700 myBlueshadow mt-5'
        >
          Đăng nhập
        </button>
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
