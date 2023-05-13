'use client'
import { FC } from 'react'
import PortfolioImgWrapper from '../../../MainComponents/ui/PortfolioImgWrapper'
import { motion } from 'framer-motion'
interface projectsProps {

}

const PersonalProjects: FC<projectsProps> = ({ }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='mt-20'>

      <div className='grid grid-rows-2 grid-cols-2  w-full gap-10'>
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
          <PortfolioImgWrapper href='/portfolio/seta-tei' src='/images/portfolio/personal/new-setatei.jpg' />
        </div>
        <div className=''>
          <h3 className='text-[14px] italic mb-5'>
            Minimalist
            Space Posters
            Clone
          </h3>
          <PortfolioImgWrapper href='/portfolio/minimalistic-space-poster' src='/images/portfolio/personal/spa/space-posters-preview.jpg' />
        </div>



      </div>
    </motion.div>
  )
}

export default PersonalProjects