import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Multi Step Form'
            src='/images/portfolio/FrontEndMentor/multi-step-form.jpg'
            github='https://github.com/bap-ssbm/multi-step-form'
            link='https://bap-ssbm.github.io/multi-step-form/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, typescript, tailwind CSS, Framer-Motion, React-router
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>

            <div>
                This is the 'advanced' level challenge on front-end mentor, where the users should be able to:
                <ul>
                    <li>
                        - Complete each step of the sequence
                    </li>
                    <li>
                        - Go back to a previous step to update their selections
                    </li>
                    <li>
                        - See a summary of their selections on the final step and confirm their order
                    </li>
                    <li>
                        - View the optimal layout for the interface depending on their device's screen size
                    </li>
                    <li>
                        - See hover and focus states for all interactive elements on the page
                    </li>
                    <li>
                        - Receive form validation messages if:
                    </li>
                    <li>
                        - A field has been missed
                    </li>
                    <li>
                        - The email address is not formatted correctly
                    </li>
                    <li>
                        - A step is submitted, but no selection has been made
                    </li>
                </ul>
            </div>



        </AboutTemplate>
    )
}

export default page