'use client'
import { FC } from 'react'
import ProjectsWrapper from './ProjectsWrapper'

import { motion } from 'framer-motion'

interface ProjectsSectionProps {

}

const ProjectsSection: FC<ProjectsSectionProps> = ({ }) => {
    return (
        <motion.section 
        initial={{ opacity:0}}
        whileInView={{opacity:1, transition:{duration:1,  ease: 'easeInOut'}}}
        viewport={{once:true}}
        id="projects" className=' flex flex-col w-full bg-opacity-50 dark:bg-opacity-20 relative items-center  lg:my-[7%]  text-center border-ypt-10' >
       
                <div className='text-[30px]'>
                    <h1 className='font-Oswald  tracking-[2px] underline '>PORTFOLIO </h1>
                </div>
           


            <ProjectsWrapper />

        </motion.section>
    )
}

export default ProjectsSection