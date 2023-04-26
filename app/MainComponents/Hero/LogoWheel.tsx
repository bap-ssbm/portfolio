'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface LogoWheelProps {

}
interface logoProps {
    src: string
}
const logos = [
    '/images/logos/typescript-icon.svg',
    '/images/logos/javascript.svg',
    '/images/logos/nextjs-icon.svg',
    '/images/logos/react.svg',
    '/images/logos/tailwindcss-icon.svg' ,
]



const MapLogos: FC<logoProps> = ({ src }) => {
    return (
        <div className=''>
            <Image height={40} width={40} alt='' src={src} />
        </div>
    )
}
const LogoWheel: FC<LogoWheelProps> = ({ }) => {
    
    return (
        <div id='logo-wheel' className='flex h-10 flex-wrap gap-20 justify-center items-center'>
            {
                logos.map((logo, i)=>{
                    return(<MapLogos key={i} src={logo}/>)
                })
            }
        </div>
    )
}

export default LogoWheel