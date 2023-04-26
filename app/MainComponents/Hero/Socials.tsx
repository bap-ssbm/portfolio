'use client'
import { FC } from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
interface SocialsProps {

}
const wrapperVariant:Variants = {
   initial:{
     opacity:0
   },
   animate:{
     opacity:1,
     transition:{
       duration:0.8
     }
   }
 }

const Socials: FC<SocialsProps> = ({ }) => {
    return (
        <motion.div 
        variants={wrapperVariant}
        initial="initial"
        animate="animate"
        className='text-[13px] flex gap-10 my-10 lg:my-0'>
            <div className=' underline hover:scale-105 duration-300'>
               <a href=''>Github</a>
            </div>
            <div className=' underline hover:scale-105 duration-300'>
               <a href=''>LinkedIn</a>
            </div>
            <div className=' underline hover:scale-105 duration-300'>
               <a href=''>Email</a>
            </div>
            <div className=' underline hover:scale-105 duration-300'>
               <Link href='/contact'>Contact Form</Link>
            </div>
        </motion.div>
    )
}

export default Socials