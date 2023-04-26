'use client'
import { FC } from 'react'
import Intro from '../Intro'
import Why1 from './Why1'
import Why2 from '../Why2'
import AboutImg from './AboutImg'
import { motion } from 'framer-motion'

interface AboutMeProps {

}

const AboutMe: FC<AboutMeProps> = ({ }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
        className='flex flex-col gap-14 lg:w-[45%]'>
            
            <Intro/>
            <AboutImg/>
            <Why1/>
            <Why2/>
        </motion.div>
    )
}

export default AboutMe