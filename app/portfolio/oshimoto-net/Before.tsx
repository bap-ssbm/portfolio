import Image from 'next/image'
import { FC } from 'react'

interface BeforeProps {

}

const Before: FC<BeforeProps> = ({ }) => {
    return (
        <div className='w-full'>
            <h2 className='font-Oswald text-[20px] mb-5'>
                What it looked like before
            </h2>
            <div className='flex flex-col lg:flex-row  gap-10'>
                <div className='lg:w-[45%] space-y-10'>

                    <Image width={1920} height={1080} src='/images/portfolio/personal/before-oshimoto.jpg' alt='before' />
                    <Image width={1920} height={1080} src='/images/portfolio/personal/before-oshimoto2.jpg' alt='before' />
                </div>
                <div className='flex-1'>
                    <h2 className='font-Oswald text-[16px] mb-5'>
                        The process
                    </h2>
                    <p>
                        These are screenshots from what the website looked like before on wordpress.
                    </p>
                    <p>
                        As you can see, the navbar is really big which made the website feel clustered, and made for a bad user experience.
                        Therefore, I made the navbar into what you see on traditional websites with the logo on the left, and the navmenu on the right.
                        The socials were placed on the navbar because my father has been wanting to gain more traction his socials. I also added a signature logo, which I made for my father back when he 
                        asked me to make him a copyright logo for his photos.
                    </p>
                    <h2 className='font-Oswald text-[16px] mt-5'>
                        The design
                    </h2>
                    <p className='mt-2'>
                        By looking up all kinds of other professional photography websites, I took in alot of different inspirations.
                    </p>
                    <p>
                        What I came to find out was that for the hero section of photography websites, they usually just let the images do the talking with a lack of description.
                        So, I went for exactly that, a minimalistic design.
                    </p>
                    <h2 className='font-Oswald text-[16px] mt-5'>
                        Drafts
                    </h2>
                    <h3 className='underline'>
                        Draft 1
                    </h3>
                    <p>
                        As I mentioned, I first created a first draft of the website with EJS, using body parser and expressJS to render the website.
                        The website had a carousel at the homepage, and the porfoio pages didnt have a masonry layout.
                        This was my first attempt at redesigning the website from scratch, and was before I learned React. So the website felt like incomplete (at least to me) at the time.
                        However, I did manage to make an email contact page with Nodemailer, and made a descent about me page.
                    </p>
                    <h3 className='underline'>
                        Draft 2-3
                    </h3>
                    <p>
                        These 2 drafts were made after I learned how to create React applications, and was made just right after I learned how to create framer-motion animations.
                        Therefore, I inserted a ton of unnecessary animations like parallax scrolling animations to make images appear while scrolling, which I thought was pretty nice at the time,
                         but now I've come to realize that over-adding animations can make for a bad user experience.
                        
                    </p>
                    <h3 className='underline'>
                        Draft 4 (final)
                    </h3>
                    <p>
                        This is the final draft, which is what the website is right now that I made after I learned how to make nextJs applicaitons.
                        The reason I decided to go with nextJs rather than ReactJs, is the routing, and also for the experience of learning how to create a nextjs app.
                        As I mentioned before, this website represents everything I learned up to this point with react, best practices, and even web design.
                        Draft 1 was the starting point. Draft 2-3 felt over complicated, and draft 4 is the simplified, but yet feels the most complete of all of them.
                    </p>

                </div>
            </div>


        </div>
    )
}

export default Before