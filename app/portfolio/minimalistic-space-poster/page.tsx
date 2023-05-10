import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'
import Image from 'next/image'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Minimalist Space Posters Clone'
            src='/images/portfolio/personal/spa/space-posters-preview.jpg'
            github='https://github.com/bap-ssbm/space-posters'
            link='https://space-posters.vercel.app/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, typescript, Framer-Motion, React-router, RegularCSS, vite
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p className='mb-5'>
                This is a clone of an Ecommerce website I made with React -- <a className='underline' href='https://www.spaceposters.co/'>Click for the original website</a>
            </p>
            <p>
                I really like the concept of space, and simplicity that went into that website, so I wanted to give it a shot and remake it with react. As well as use regular CSS, to give myself a refresher.
            </p>
            <p>
                Improvements were added to the website such as animation of the background image stars, and some stylistic improvements on spacing, and hover effects as well. As just overall navbar 
                and routing speed improvements because the original website seems to have been made with regular css javascript and html.
            </p>
            <div className='flex flex-col gap-10 w-full mt-10'>
                <h2 className='underline text-[18px]'>The Pages</h2>
                <Image width={1920} height={1080} alt='' src="/images/portfolio/personal/spa/productpage.jpg"/>
                <Image width={1920} height={1080} alt='' src="/images/portfolio/personal/spa/cartpage.jpg"/>
                <Image width={1920} height={1080} alt='' src="/images/portfolio/personal/spa/checkoutpage.jpg"/>
            </div>




        </AboutTemplate>
    )
}

export default page