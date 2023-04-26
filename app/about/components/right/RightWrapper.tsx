'use client'
import { FC } from 'react'
import Coding from '@/app/MainComponents/About/Coding'
import { motion } from 'framer-motion'
import FunFacts from './FunFacts'
import OtherSkills from './OtherSkills'
interface RightWrapperProps {

}

const RightWrapper: FC<RightWrapperProps> = ({ }) => {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
        className='flex flex-col gap-14 flex-1'>
            
            <FunFacts />
            <Coding />
            <OtherSkills/>
        </motion.div>
    )
}

export default RightWrapper