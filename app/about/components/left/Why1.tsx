import { FC } from 'react'

interface Why1Props {
  
}

const Why1: FC<Why1Props> = ({}) => {
  return (
    <div className='flex flex-col gap-3'>
                <h2 className='text-[23px] font-Oswald italic'>Why Web Development?</h2>
                <p >
                    Ever since taking my first computer science class back in higschool where I learned C++,
                    I had some interest in programming and over the years, I just did coding challenges on websites like hackerrank.com for fun, but I wasn't sure what to do about it.
                    <br />
                    After graduating TUJ, I had some jobs here and there, but nothing really felt fulfilling, and wasn't sure what to do with my professional life.
                    I tried HR, translation, and even digital art since I loved drawing throughout my life.
                    <br />
                    One day I decided to take a web development course on udemy last year, 2022, which just went over the basics of full stack web development. However, it was enough
                    for me to get hooked.
                    <br />
                    I was already somewhat adept to programming so it was pretty natural for me to get into.
                    And now after completing that course on udemy, I've been spending pretty much every day developing web applications.
                    <br />
                    I also have been learning and studying about a multitude of different stuff on web development on youtube from NextJS, which is what I used to build this portfolio website to AWS,
                    which I don't even really use, but decided to learn.
                </p>
            </div>
  )
}

export default Why1