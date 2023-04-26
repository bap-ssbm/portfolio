'use client'

import { FC, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import "./Hamburg.css"
interface HamburgProps {
        openMenu: boolean,
        setOpenMenu: Function
}

const Hamburg: FC<HamburgProps> = ({ openMenu, setOpenMenu}) => {
   

    return (


        <button
            onClick={() => setOpenMenu(!openMenu)}

            className={' lg:hidden cursor-pointer w-[fit] h-[50px] flex items-center gap-4 relative duration-300 ease-in z-50 mr-10' + (!openMenu && 'hover:scale-125')}
        >
         
            <div id="nav-icon4" className={openMenu ? ' open' : ''}>
                <span className='dark:bg-white bg-black'></span>
                <span className='dark:bg-white bg-black'></span>
                <span className='dark:bg-white bg-black'></span>
            </div>

        </button>


    )
}

export default Hamburg