import Image from 'next/image'
import { FC } from 'react'

interface AboutProps {

}

const About: FC<AboutProps> = ({ }) => {
    return (
        <div>
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                This is the website I made for myself to showcase my portfolio.
            </p>

            <h2 className='text-[18px] font-Oswald mt-10'>
                Process
            </h2>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='lg:w-[45%] space-y-5'>
                    <p>
                        I took inspiration from other web-developer's portfolio websites, and this time I decided to sketch out my ideas on photoshop. here they are.
                    </p>
                    
                    
                    <Image height={1080} width={1920} src="/images/portfolio/personal/personal/Artboard 1.png" alt='draft 1' />
                    <p>
                    This draft includes a 3d computer I was going to add with three JS, but I scrached the idea since it causes the website to be slower
                    </p>
                    <Image height={1080} width={1920} src="/images/portfolio/personal/personal/73030534_2438293226225829_3960763705876021248_n.jpg.png" alt='draft 2' />
                    <p>
                        This is the final draft of the website
                    </p>
                    
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <p>Here is also the first Draft of the website I made, using my signature as a logo, that scales down on scroll. But I wasn't satisfied with it the next day so I completely redesigned the website</p>
                    <Image height={1080} width={1920} src="/images/portfolio/personal/personal-website.jpg" alt='draft 2' />
                    <p>
                        This one might look fine to some, but I've been studying web design recently, and decide to give the website much more breathing room espcially the portfolio section of the main page.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About