import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Shortly URL shortening API'
            src='/images/portfolio/FrontEndMentor/fylo-landing-page.jpg'
            github='https://github.com/bap-ssbm/fylo-landing-page'
            link='https://bap-ssbm.github.io/fylo-landing-page/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, framer-motion, regular css
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                This is a landing page challenge that I used to try and make the cleanest framer-motion animations.
            </p>

            <h2 className='font-Oswald text-[18px] mt-5'>
                What I learned
            </h2>
            <p>
                
                a simpler way of using framer-motion. with whileInView.

                also used grid instead of flex for the first time in a project.

                using gap instead of margin. for flex and grid components
            </p>



        </AboutTemplate>
    )
}

export default page