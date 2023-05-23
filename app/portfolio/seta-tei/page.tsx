import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {}
const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Restaurant Page / Hayama Seta-tei'
            src='/images/portfolio/personal/new-setatei.jpg'
            github='https://github.com/bap-ssbm/seta-tei'
            link='https://seta-tei.vercel.app/'>
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
                This is an official website I made for the French Restaurant called Seta-tei
            </p>
            <p>
                The Restaurant's previous website was made on wordpress, but the owner mentioned to me that she has been wanting to remake it and make it look better,
                so I decided to lend a helping hand by recreating the website from scratch with ReactJs.
                I was initially planning to make the website with NextJS; however, upon deployment with i18n functionality (internationalization-framework), there were alot of complicated issues.
                Therefore, I decided to try i18n with React instead, and it went alot smoother.
            </p>
        </AboutTemplate>
    )
}

export default page