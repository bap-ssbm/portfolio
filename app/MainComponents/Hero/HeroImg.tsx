import Image from 'next/image'
import { FC } from 'react'
import { motion } from 'framer-motion'
interface HeroImgProps {
  
}

const HeroImg: FC<HeroImgProps> = ({}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration:0.8}}}
    className='lg:w-[40%] flex justify-center lg:justify-end'>
    <Image height={500} width={500} alt='' src="/images/IMG_0937.jpg" />
</motion.div>

  )
}

export default HeroImg