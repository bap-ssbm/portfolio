import React, { FC } from 'react'
import './button.css'

interface ButtonProps {
    children: React.ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
    return (
        <button className='w-fit py-5  px-8 border  tracking-[2px] text-[14px] border-black text-black dark:text-white dark:border-white lg:hover:text-white lg:dark:hover:text-black hover:scale-105 duration-300 hover:shadow-2xl hover-btn-effect relative'>
            <span className='relative z-10'>
                {children}
            </span>

            <div className='h-full w-full dark:bg-white bg-black absolute top-0 left-0 z-0 duration-700 origin-left' />
        </button>
    )
}

export default Button