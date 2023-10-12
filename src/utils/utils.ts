import axios, { AxiosError } from 'axios'
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError(error:unknown){
    return isAxiosError(error) && error.response?.status === 422
}
