import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Space Tourism Website'
            src='/images/portfolio/FrontEndMentor/spacetourism.jpg'
            github='https://github.com/bap-ssbm/space-tourism-website'
            link='https://bap-ssbm.github.io/space-tourism-website/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, basic CSS, Framer-Motion, React-router
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p className='mb-5'>
                This is the first project I started on front-end mentor but one of the last ones I finished. The reason is because I started the challenge when I just started learning
                how to make websites, so making multi-page websites like this was a bit of a challenge for me, and didn't really have the confidence to make a website that complete
                at the time. That was also during the time when I was using bootsrap rather than custom CSS or tailwindCSS so my first creation of that website felt more like a bootstrap
                website more than what it was supposed to look like, so I just left it for what it was, because I knew that I wanted to come back to it and make it better in the future.
                I then came back to this challenge after learning react and having made several web-apps with react already. Therefore, I came back feeling more confident, and just remade the entire thing
                from scratch.
            </p>


           
            <p>
                This is the first project I made with framer-motion and react-routing together so i learned alot about both. I learned that I have to add key values to each child element inside a AnimatePresence tag.
                I learned how to coniditionally run different animations. I also learned that you can't animate the exit of arrays, exit animations only animate once elements leave.
                Not when the inner html changes. So you have to wrap each of them conditionally. Kind of makes the code alittle bit more complicated, but its worth the cool user experience.
            </p>



        </AboutTemplate>
    )
}

export default page