'use client'
import { FC } from 'react'
import PortfolioImgWrapper from '../../../MainComponents/ui/PortfolioImgWrapper'
import { motion } from 'framer-motion'
interface projectsProps {

}

const PersonalProjects: FC<projectsProps> = ({ }) => {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1, transition:{duration:1,  ease: 'easeInOut'}}}
    viewport={{once:true}}
    className='mt-20'>

      <div className='flex flex-col lg:flex-row gap-10'>
        <div className=''>
          <h3 className='text-[14px] italic mb-5'>Professional photographer's portfolio</h3>
          <PortfolioImgWrapper href='/portfolio/oshimoto-net' src='/images/portfolio/personal/oshimoto.net.jpg' />
        </div>
        <div className=''>
          <h3 className='text-[14px] italic mb-5'>Personal portfolio (this current website)</h3>
          <PortfolioImgWrapper href='/portfolio/portfolio' src='/images/portfolio/personal/personal/final_portfolio.jpg' />
        </div>
        <div className=''>
          <h3 className='text-[14px] italic mb-5'>Professional Restuarant's Website</h3>
          <PortfolioImgWrapper href='/portfolio/seta-tei' src='/images/portfolio/personal/seta-tei.jpg'/>
        </div>
        

      </div>
    </motion.div>
  )
}

export default PersonalProjects