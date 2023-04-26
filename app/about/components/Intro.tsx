import { FC } from 'react'

interface IntroProps {

}

const Intro: FC<IntroProps> = ({ }) => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-[23px] font-Oswald italic'>Introduction</h2>
            <p>
                Hello! My name is Kentaro Oshimoto.
                I was born in Culver City and was raised in Redondo Beach, CA, United States.
                <br />
                The Highschool I went to was Redondo Union Highschool, which I graduated in 2015 and went to El Camino Community College until 2017 when I transferred to Temple University,
                Japan Campus where I studied Economics and graduated in 2020.
                <br />
                I currently now reside in Hayama, Kanagawa, Japan where I spend my time studying web development, and sometimes do freelance translation work.
            </p>
        </div>
    )
}

export default Intro