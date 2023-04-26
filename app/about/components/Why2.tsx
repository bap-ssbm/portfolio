import { FC } from 'react'

interface Why2Props {
  
}

const Why2: FC<Why2Props> = ({}) => {
  return (
    <div className='flex flex-col gap-3'>
                <h2 className='text-[23px] font-Oswald italic'>Why Front-End?</h2>
                <p>
                    I mentioned briefly that I tried getting into professional digital art. This is one of the reasons why I decided to focus heavily on the front-end.
                    <br />
                    I find that front-end web development comes to me more naturally than the back-end because I love seeing what I made visually on the screen, and see the improvements I made overtime
                    like I would as a digital artist getting better at their craft.
                    <br />
                    I also love the frameworks that come along with it, such as ReactJs, and NextJS. These frameworks allow so much creativity with hooks,
                    and loads of different dependencies that other developers made, which allow for more creativity.
                </p>
            </div>
  )
}

export default Why2