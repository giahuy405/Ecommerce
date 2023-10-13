import axios, { AxiosInstance } from 'axios'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { getAccessTokenLS, removeAccessTokenLS, saveAccessTokenToLS } from './auth'
import { path } from 'src/constants/path'

class Http {
  instance: AxiosInstance
  private accessToken: string | null // lưu trên ram
  constructor() {
    this.accessToken = getAccessTokenLS() 
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const url = response.config.url
        if (url === path.login || url === path.register) {
          this.accessToken = (response.data as AuthResponse).data?.access_token
          saveAccessTokenToLS(this.accessToken)
        } else if (url === path.logout) {
          this.accessToken = ''
          removeAccessTokenLS()
        }
        console.log(response)
        return response
      },
      function (error) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance

export default http
