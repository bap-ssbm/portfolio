import { FC } from 'react'
import Image from 'next/image'
interface FunFactsProps {

}

const FunFacts: FC<FunFactsProps> = ({ }) => {
    return (
        <div >
            <h2 className='text-[23px] font-Oswald italic mb-10'>
                Hobbies!
            </h2>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-5 items-center grayscale'>
                    <Image width={200} height={200} src='/images/about/pngwing.com.png' alt='' />
                    <p >
                        I used to dance with a crew competitvely back in America, Now I just breakdance for fun!
                    </p>
                </div>
                <div className='flex gap-5 items-center grayscale'>
                    <Image className='rounded-full' width={200} height={200} src='/images/about/gamecube.jpg' alt='' />
                    <p >
                        Competitive Super Smash Brother Melee for the nintendo gamecube is a passion of mine! I love playing other games casually as well though.
                    </p>
                </div>
           
        </div>
    </div >
  )
}

export default FunFacts