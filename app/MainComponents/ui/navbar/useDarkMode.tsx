'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { FC, useState, useEffect } from 'react'

interface useDarkModeProps {

}

const UseDarkMode: FC<useDarkModeProps> = ({ }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return (
    <button
      className='text-[20px] h-fit relative z-50'
      onClick={() => {
        if (theme === 'dark') {
          localStorage.theme = 'light'
          setTheme('light')
        } else {
          localStorage.theme = 'dark'
          setTheme('dark')
        }
      }}>
        <div className='hidden dark:inline'>
          <FiSun />
        </div>
        <div className='inline dark:hidden'>
          <FiMoon />
        </div>
     
    </button>
  )
}

export default UseDarkMode