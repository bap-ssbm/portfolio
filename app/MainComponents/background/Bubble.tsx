'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'

interface BubbleProps {

}

const Bubble: FC<BubbleProps> = ({ }) => {
    return <motion.div 
    initial={{x:0, y:0}}
    animate={{x:[0,300,600], y:[0, 100 ,300, 100, 0], transition:{duration:10, repeat:Infinity, repeatType:'mirror', ease:'easeInOut'} }}
    
    className='absolute bg-pink-300 h-[100px] z-[1] w-[100px] rounded-full opacity-25 hover:bg-white'></motion.div>
}

export default Bubble