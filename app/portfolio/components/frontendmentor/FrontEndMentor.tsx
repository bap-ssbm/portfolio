import { FC } from 'react'
import FeWrapper from './FeWrapper'

interface FrontEndMentorProps {

}

const FrontEndMentor: FC<FrontEndMentorProps> = ({ }) => {
  return (
    <div>
      <div className='mb-10'>
        <h2 className='text-[23px] font-Oswald italic mb-4'>
          Front-End Mentor Challenges
        </h2>
        <p className=''>
          Frontend Mentor challenges have been instrumental in helping me improve my skills as a web developer.
          
          By completing these challenges and receiving feedback from the community,
          
           I have been able to adopt best practices, explore new techniques and tools,
          and build up my portfolio with real-world projects.
        </p>
      </div>

      <FeWrapper />
      <div className='my-20 pl-[5%] hover:scale-105 duration-500'>
        <a href='https://www.frontendmentor.io/profile/bap-ssbm/solutions' className='text-[16px] tracking-[2px] underline'>Check Out My Other Completed Challenges Here!</a>
      </div>
    </div>
  )
}

export default FrontEndMentor