import { FC } from 'react'
import Image from 'next/image'
interface AboutImgProps {
  
}

const AboutImg: FC<AboutImgProps> = ({}) => {
  return (
  <div className='h-full w-full'>
    <Image height={300} width={300} alt='' src='/images/about/73030534_2438293226225829_3960763705876021248_n.jpg'/>
  </div>)
}

export default AboutImg