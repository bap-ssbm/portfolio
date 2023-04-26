'use client'

import { FC } from 'react'
import Link from 'next/link'
import UseDarkMode from './useDarkMode'
import { motion } from 'framer-motion'

interface MobileNavProps {
    openMenu: boolean,
    setOpenMenu: Function
}

const MobileNav: FC<MobileNavProps> = ({ openMenu, setOpenMenu }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.5}}}
        exit={{opacity:0, transition:{duration:0.5}}}
        className='h-screen w-screen fixed dark:bg-gray-900 top-0 left-0 bg-gray-200 pt-[20vh] px-[5%] lg:hidden'>
            <ul
                className='lg:hidden gap-10 font-bold flex flex-col text-[20px]'>

                <li className='underline-hover-effect  relative' onClick={() => setOpenMenu(!openMenu)}>
                    <Link href='/'>
                        HOME
                    </Link>
                
                </li>
                <li className='underline-hover-effect relative' onClick={() => setOpenMenu(!openMenu)}>
                    <Link href='/portfolio'>
                        PORTFOLIO
                    </Link>
                
                </li>
                <li className='underline-hover-effect relative' onClick={() => setOpenMenu(!openMenu)}>
                    <Link href='/about'>
                        ABOUT
                    </Link>
               
                </li>
                <li className='underline-hover-effect relative' onClick={() => setOpenMenu(!openMenu)}>
                    <Link href='/contact'>
                        CONTACT
                    </Link>
      
                </li>
                <li className=''>
                    <UseDarkMode />
                </li>
            </ul>
        </motion.div>

    )
}

export default MobileNav