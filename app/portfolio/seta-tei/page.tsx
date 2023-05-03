import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Restaurant Page / Hayama Seta-tei'
            src='/images/portfolio/personal/seta-tei.jpg'
            github='https://github.com/bap-ssbm/seta-react-draft'
            link='https://seta-react-draft.vercel.app/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, typescript, Framer-Motion, React-router, TailwindCSS
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p className='mb-5'>
                This is a draft of the website I'm currently remaking for my auntie's restaurant.
            </p>
            <p>
                Her current website is made on wordpress, but she mentioned to me that she has been wanting to remake it and make it look better,
                so I decided to lend a helping hand by recreating the website from scratch with ReactJs.
                I was initially planning to make the website with NextJS; however, upon deployment with i18n functionality (internationalization-framework), there were alot of complicated issues.
                Therefore, I decided to try i18n with React instead, and it went alot smoother.
            </p>
            <p>
                Since this is just a draft, this is not the final appearance. We are planning to retake the pictures since these pictures are from 2015.
                Making the Menu page, and the other pages look better in the future is a priority as well.
                I also want to try my hand in creating a backend for making reservations as well as creating a mobile app with react native so that it's easier 
                to keep track of reservations. 
            </p>




        </AboutTemplate>
    )
}

export default page