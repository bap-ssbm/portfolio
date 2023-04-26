import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Interactive Comments Section'
            src='/images/portfolio/FrontEndMentor/interactive-comments-section.jpg'
            github='https://github.com/bap-ssbm/interactive-comments-challenge'
            link='https://bap-ssbm.github.io/interactive-comments-challenge/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, typescript, regular CSS
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                This is a website I made to complete the challenge for front-end mentor
            </p>


            <div>
                Users should be able to:
                <ul>
                    <li>
                        View the optimal layout for the app depending on their device's screen size
                    </li>
                    <li>
                        See hover states for all interactive elements on the page
                    </li>
                    <li>
                        Create, Read, Update, and Delete comments and replies
                    </li>
                    <li>
                        Upvote and downvote comments
                    </li>
                    <li>
                        use localStorage to save the current state in the browser that persists when the browser is refreshed.
                    </li>
                    <li>
                        use timestamps and dynamically track the time since the comment or reply was posted
                    </li>
                </ul>
                <p className='mt-10'>
                    This is the first project I created outside of any tutorial projects with reactJs, and was probably one of the tougher challenges I've done so far on front end mentor
                    despite looking very simple in the ui. As a result, I learned alot about React through this challenge such as the useContext, hook which I later found about after completeing the challenge.
                    After finding out, I just implemented it and replaced it and just simply wrapped everything with the ContextProvider component to pass all the information down to the 
                    different components on the page, instead of through properties like how it was before. 
                </p>
            </div>



        </AboutTemplate>
    )
}

export default page