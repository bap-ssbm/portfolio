'use client'

import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PortfolioImgWrapperProps {
    href: string, src: string

}

const PortfolioImgWrapper: FC<PortfolioImgWrapperProps> = ({ href, src }) => {
    const [showMore, setShowMore] = useState<boolean>(false)
    return (

        <div
            style={{ aspectRatio: '16/9' }}
            className='overflow-hidden rounded-lg shadow-md'>
            <Link href={href}>

                <div
                    className='hover:scale-110 duration-500 ease-in-out cursor-pointer'>
                    <Image style={{ aspectRatio: '16/9' }} height={1000} width={1000} alt='' src={src} />
                </div>
            </Link>
        </div>


    )
}

export default PortfolioImgWrapper