import { FC } from 'react'
import Link from 'next/link'
import UseDarkMode from './useDarkMode'

interface NavMenuProps {
  
}

const NavMenu: FC<NavMenuProps> = ({}) => {
  return (
    <ul

                className='lg:flex gap-10 hidden'>

                <li className='underline-hover-effect  relative'>
                    <Link href='/'>
                        Home
                    </Link>
                    <div className='absolute bottom-[-10px] left-0 w-full h-[1px] dark:bg-white bg-black duration-500' />
                </li>
                <li className='underline-hover-effect relative'>
                    <Link href='/portfolio'>
                        Portfolio
                    </Link>
                    <div className='absolute bottom-[-10px] left-0 w-full h-[1px] dark:bg-white bg-black duration-500' />
                </li>
                <li className='underline-hover-effect relative'>
                    <Link href='/about'>
                        About
                    </Link>
                    <div className='absolute bottom-[-10px] left-0 w-full h-[1px] dark:bg-white bg-black duration-500' />
                </li>
                <li className='underline-hover-effect relative'>
                    <Link href='/contact'>
                        Contact
                    </Link>
                    <div className='absolute bottom-[-10px] left-0 w-full h-[1px] dark:bg-white bg-black duration-500' />
                </li>
                <li className='ml-20'>
                    <UseDarkMode />
                </li>
            </ul>
  )
}

export default NavMenu