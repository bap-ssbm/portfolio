'use client'

import { FC, useState } from 'react'
import Hamburg from './Hamburg'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import './Underline.css'

import NavMenu from './NavMenu'
import MobileNav from './MobileNav'



interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    const { scrollYProgress } = useScroll();

    const [openMenu, setOpenMenu] = useState(false)
    return (
        <nav
            className='flex fixed text-[13px] top-0 left-0 w-full px-[5%] z-40   items-center justify-between  h-[100px]'>
            <div className=''>
                <Link href='/'>

                    <span className='font-bold'>K.O</span>

                </Link>

            </div>
            <NavMenu />

            <Hamburg openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <AnimatePresence>
                {openMenu && (<MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />)}
            </AnimatePresence>


        </nav>
    )
}

export default Navbar