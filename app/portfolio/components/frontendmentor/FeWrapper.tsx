
'use client'
import { FC } from 'react'
import PortfolioImgWrapper from '../../../MainComponents/ui/PortfolioImgWrapper'
import { motion } from 'framer-motion'
interface FeWrapperProps {
  
}

const FeWrapper: FC<FeWrapperProps> = ({}) => {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1, transition:{duration:1,  ease: 'easeInOut'}}}
    viewport={{once:true}}
    className='grid grid-rows-2 grid-cols-2 lg:grid-cols-3 w-full gap-10'>
        <PortfolioImgWrapper href='/portfolio/space-tourism' src='/images/portfolio/FrontEndMentor/spacetourism.jpg'/>
        <PortfolioImgWrapper href='/portfolio/multi-step-form' src='/images/portfolio/FrontEndMentor/multi-step-form.jpg'/>
        <PortfolioImgWrapper href='/portfolio/countries-api' src='/images/portfolio/FrontEndMentor/countries-api.jpg'/>
        <PortfolioImgWrapper href='/portfolio/interactiveComments' src='/images/portfolio/FrontEndMentor/interactive-comments-section.jpg'/>
        <PortfolioImgWrapper href='/portfolio/url-shortening' src='/images/portfolio/FrontEndMentor/shortly.jpg'/>
        <PortfolioImgWrapper href='/portfolio/sneaker-company' src='/images/portfolio/FrontEndMentor/sneakercompany.jpg'/>
        <PortfolioImgWrapper href='/portfolio/fylo-landing-page' src='/images/portfolio/FrontEndMentor/fylo-landing-page.jpg'/>
    </motion.div>
  )
}

export default FeWrapper