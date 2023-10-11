import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList/ProductList'
import Login from './pages/Login/Login'
import Register from './pages/Registers/Register'
import RegisterLayout from './layouts/RegisterLayout'
const useRouteElement = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: 'login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: 'register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return element
}

export default useRouteElement
