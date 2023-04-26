import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Shortly URL shortening API'
            src='/images/portfolio/FrontEndMentor/shortly.jpg'
            github='https://github.com/bap-ssbm/url-shortening-api'
            link='https://bap-ssbm.github.io/url-shortening-api/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, tailwindCSS, JavaScript, Axios, Framer-motion, shrtcode API
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                Users should be able to:
            </p>
            <ul>
                <li>
                    View the optimal layout for the site depending on their device's screen size
                </li>
                <li>
                    Shorten any valid URL
                </li>
                <li>
                    See a list of their shortened links, even after refreshing the browser
                </li>
                <li>
                    Copy the shortened link to their clipboard in a single click
                </li>
                <li>
                    Receive an error message when the form is submitted if the input field is empty
                </li>

            </ul>

            <p className='my-10'>
                This landing page was my 3rd landing page I made for front-end mentor challenge, so at the point of making this one, I was very used to creating the layout for landing pages
            </p>

            <p >
                I learned alot from this project. I learned that using tailwind for animations rather than framer-motion in some situations is better and easier to use.
                i learned that there is a function that can let user copy a variable by clicking on a button.
                learned a bit more how to do axios, this time, i manually wrote the code of getting the api myself. Getting better at making clean framer-motion animations.
                and also tailwind CSS. its becoming a bit more second nature to me. Although sometimes i have to look at the documentation.

                This is also one of my first times using mobile-first workflow, it actually worked better for me, i didnt have to worry about anything breaking in the mobile view, since I created it that way first
            </p>
            


        </AboutTemplate>
    )
}

export default page