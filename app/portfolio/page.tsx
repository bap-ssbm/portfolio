import { FC } from 'react'
import PersonalProjects from './components/PersonalProjects/PersonalProjects'
import FrontEndMentor from './components/frontendmentor/FrontEndMentor'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <main className='lg:px-[5%] pt-5  gap-10 flex flex-col'>
      <div className='flex flex-col lg:flex-row justify-between lg:gap-20'>
        <h1 className='text-[30px] font-Oswald'>
          PORTFOLIO
        </h1>
        <p className='tracking-[2px] text-[13px]'>
          Professional Projets & Front-end Mentor Challenges
        </p>
      </div>
      <div className='border-dashed  border-t border-black dark:border-white h-[1px] w-full' />
      <div className='flex flex-col gap-52'>

        <PersonalProjects />
        <div className='border-dashed  border-t border-black dark:border-white h-[1px] w-full' />
        <FrontEndMentor />
      </div>


    </main>
  )
}

export default page