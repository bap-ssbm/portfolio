
'use client'

import { FC, useState, useEffect } from 'react'

import HeroDescription from './HeroDescription'

import Image from 'next/image'
import Socials from './Socials'
import HeroImg from './HeroImg'


interface HeroSectionProps {

}

const HeroSection: FC<HeroSectionProps> = ({ }) => {



    return (
        <section
            id='hero'
            className='text-[18px] flex lg:mb-[10%]  flex-col lg:flex-row relative text-center lg:text-start  w-full  justify-between lg:pb-0'>

            <div className='min-h-full flex flex-col justify-between items-center lg:items-start'>
                <HeroDescription />
                <Socials/>
            </div>





           <HeroImg/>






        </section>)
}

export default HeroSection