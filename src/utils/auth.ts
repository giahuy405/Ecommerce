export const saveAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}

export const removeAccessTokenLS = () => {
  localStorage.removeItem('access_token')
}
export const getAccessTokenLS = () => {
  return localStorage.getItem('access_token' || '')
}
