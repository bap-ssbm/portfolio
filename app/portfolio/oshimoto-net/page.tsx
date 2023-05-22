import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'
import About from './About'
import Before from './Before'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='OSHIMOTO.NET' src='/images/portfolio/personal/oshimoto.net.jpg' github='https://github.com/bap-ssbm/oshimoto.net' link='https://www.oshimoto.net/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    Next.js, Tailwind CSS, Framer-Motion, Material-UI, and Nodemailer (with Post API for the form).
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <div className='flex flex-col w-full gap-10'>
                <About />

                <Before />
            </div>




        </AboutTemplate>
    )
}

export default page