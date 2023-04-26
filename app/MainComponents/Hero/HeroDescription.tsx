'use client'
import { FC } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

interface DescriptionProps {

}

const wrapperVariant:Variants = {
  initial:{
    opacity:0,
    y:'-5vh'
  },
  animate:{
    opacity:1,
    y:'0vh',
    transition:{
      duration:0.8,
      ease: 'easeInOut'
    }
  }
}


const HeroDescription: FC<DescriptionProps> = ({ }) => {


  return (
    <motion.div 
    variants={wrapperVariant}
    initial="initial"
    whileInView="animate"
    
    className='flex flex-col  relative items-center lg:items-start'>

      <div className='text-[30px] lg:text-[40px] font-Oswald font-normal mb-10 flex'>
        <h1>I'm </h1><Image className='brightness-0 dark:brightness-100' height={300} width={300} src='/images/kentaro-signature.png' alt='Kentaro Oshimoto'/>

      </div>
      <p className='text-[16px] lg:text-[20px] tracking-[1.5px] mb-3'>
        A self-taught front-end web developer
        <br/>
        always building and learning
      </p>
      <p className='tracking-[2px] mt-5 text-[16px]'>
        - typescript | reactJs | nextJs -
      </p>


    </motion.div>
  )
}

export default HeroDescription