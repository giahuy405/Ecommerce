import * as yup from 'yup'
export const getRules = (getValues: any) => ({
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 30,
      message: 'Email không được dài hơn 30 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Email không được ngắn 5 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập mật khẩu'
    },
    maxLength: {
      value: 30,
      message: 'Mật khẩu không được dài hơn 30 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Mật khẩu không được ngắn 5 ký tự'
    }
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Vui lòng xác thực mật khẩu'
    },
    maxLength: {
      value: 30,
      message: 'Xác thực mật khẩu không được dài hơn 30 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Xác thực mật khẩu không được ngắn 5 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value: any) => value === getValues('password') || 'Xác thực mật khẩu không giống'
        : undefined
  }
})

export const schema = yup.object({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .min(5, 'Email có ít nhất 5 ký tự')
    .max(50, 'Email không thể dài hơn 50 ký tự'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(5, 'Mật khẩu có ít nhất 5 ký tự')
    .max(50, 'Mật khẩu không thể dài hơn 50 ký tự'),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập xác thực mật khẩu')
    .min(5, 'Xác thực mật khẩu có ít nhất 5 ký tự')
    .max(50, 'Xác thực mật khẩu không thể dài hơn 50 ký tự')
    .oneOf([yup.ref('password')], 'Xác thực mật khẩu không giống')
})

export const loginSchema = schema.omit(['confirmPassword']);

export type Schema = yup.InferType<typeof schema>
export type LoginSchema = yup.InferType<typeof loginSchema>
