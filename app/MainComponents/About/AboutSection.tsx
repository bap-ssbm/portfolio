
'use client'
import { FC } from 'react'
import dynamic from 'next/dynamic'
import AboutDesc from './AboutDesc'
import { motion } from 'framer-motion'
const DynamicMap = dynamic(() => import('./LocationMap'), { ssr: false })

interface AboutSectionProps {

}

const AboutSection: FC<AboutSectionProps> = ({ }) => {
    return (
        <motion.section 
        initial={{y:'20vh', opacity:0}}
        whileInView={{y:'0vh', opacity:1, transition:{duration:1, ease: 'easeInOut'}}}
     
        className='min-h-[80vh] w-full flex flex-col lg:flex-row justify-between'>
            <div className='flex flex-col flex-1 p-[5%] h-full box-border'>

                <div className='flex text-[30px] '>
                    <h1 className='font-Oswald  tracking-[2px] underline'>ABOUT ME</h1>
                </div>
                

                <AboutDesc />

            </div>
            <div className=' lg:w-[50%] w-full grid items-center'> 
                <div className='w-full pointer-events-none h-[80vh]'>
                    <DynamicMap />
                </div>
            </div>

        </motion.section>
    )
}

export default AboutSection