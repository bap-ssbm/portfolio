import React, { FC } from 'react'
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai'
import { MdOutlinePageview } from 'react-icons/md'

interface AboutTemplateProps {
    children: React.ReactNode, src: string, title: string, link: string, github: string
}

const AboutTemplate: FC<AboutTemplateProps> = ({ children, src, title, link, github }) => {
    return (
        <div className='flex flex-col items-center gap-10 lg:px-[5%] pt-5'>
          
                <h1 className='text-[30px] font-Oswald '>
                    {title}
                </h1>
           

            <a href={link}>
                <Image height={1080} width={1920} src={src} alt={title} />
            </a>
            <div className='flex gap-11 items-center justify-center text-[18px]'>
                    <a href={github} className='hover:scale-110 duration-300'><AiFillGithub/></a>
                    <a href={link} className='hover:scale-110 duration-300'><MdOutlinePageview/></a>
                </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default AboutTemplate