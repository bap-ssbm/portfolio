import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'
import About from './About'
interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='kenola.xyz' src='/images/portfolio/personal/personal/final_portfolio.jpg' github='https://github.com/bap-ssbm/portfolio' link='https://portfolio-delta-seven-78.vercel.app/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    Next.js, Tailwind CSS, Framer-Motion, Material-UI, Nodemailer, threejs, three fiber
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            
            <About/>


        </AboutTemplate>
    )
}

export default page
