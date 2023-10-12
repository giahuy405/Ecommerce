import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icon'

const ButtonDarkMode = () => {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  function onWindowMath() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }
  onWindowMath()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMath()
        break
    }
  }, [theme])

  darkQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        element.classList.add('dark')
      } else {
        element.classList.remove('dark')
      }
    }
  })
  return (
    <div className='fixed top-2 right-2'>
      {theme === 'dark' ? (
        <button
          onClick={() => {
            setTheme('light')
          }}
          className='hover:bg-gray-200 hover:text-black duration-200 p-2.5 rounded-full text-white border border-gray-400'
        >
          <MoonIcon />
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('dark')
          }}
          className='hover:bg-gray-200 duration-200 p-2.5 rounded-full text-black border border-gray-400'
        >
          <SunIcon />
        </button>
      )}
    </div>
  )
}

export default ButtonDarkMode
