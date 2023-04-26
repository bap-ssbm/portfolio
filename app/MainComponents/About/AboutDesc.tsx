import { FC } from 'react'
import Coding from './Coding'
import Button from '../ui/buttons/Button'
import Link from 'next/link'

interface AboutDescProps {

}

const AboutDesc: FC<AboutDescProps> = ({ }) => {
    return (
        <div className='mt-10 flex flex-col gap-10'>
            <div>
                <p className='text-[16px] tracking-[2px]'>
                    I'm originally born and raised in the US, California, but I moved to Japan in 2017!
                    <br />
                    I Graduated Temple University of Japan with an Economics degree, but now I'm studying to become a front-end web developer.
                </p>
            </div>
            <Link href="/about">
                <Button>
                    Learn More About Me!
                </Button>
            </Link>

            <div>
                <Coding />
            </div>


        </div>
    )
}

export default AboutDesc