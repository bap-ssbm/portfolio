import { FC } from 'react'
import AboutMe from './components/left/AboutMe'

import RightWrapper from './components/right/RightWrapper'
interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <main className='lg:px-[5%] pt-5 min-h-screen flex flex-col gap-10'>
      <div className=''>
        <h1 className='text-[30px] font-Oswald'>
          ABOUT ME
        </h1>

      </div>
      <div className='border-dashed  border-t border-black dark:border-white h-[1px] w-full' />
      <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-[4%]'>
        <AboutMe />
        <RightWrapper />
      </div>

    </main>
  )
}

export default page