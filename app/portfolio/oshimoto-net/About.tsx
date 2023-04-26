import { FC } from 'react'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return (
        <div className='w-full'>
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                This is a portfolio website a that I made for my father who is a professional Photographer.
            </p>


            <p>
                I completely redesigned and rebuilt this website from scratch, which my father originally made with Wordpress.
                This is the personal project I'm most proud of, as it represents the culmination of what I've learned throughout my web development journey.
                I made four different versions using three different frameworks: EJS, React, and Next.js. Ultimately, I decided to go with Next.js.
            </p>
        </div>

    )
}

export default About