import { FC } from 'react'
import Form from './Form'
import dynamic from 'next/dynamic'
const DynamicMap = dynamic(() => import('../MainComponents/About/LocationMap'), { ssr: false })
interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <main className='px-[5%] lg:px-0 flex flex-col lg:flex-row gap-10 items-center'>
            <div className='flex flex-col gap-3 lg:w-[45%]'>
                <h1 className='text-[30px] font-Oswald'>
                    CONTACT
                </h1>
                <p className='text-[16px] '>
                    For any business inquiries, or just to chat about any of my hobbies!
                </p>
                <Form />
            </div>
            <div className='hidden lg:flex flex-1 h-[80vh]'>
            <DynamicMap />
            </div>

        </main>
    )
}

export default page