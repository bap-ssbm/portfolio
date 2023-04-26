import { FC } from 'react'
import Button from '../buttons/Button'
import SocialIcons from './SocialIcons'
import Link from 'next/link'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return (
    <footer className='flex flex-col gap-5 lg:flex-row p-[5%] w-full justify-between items-center'>
      <div className='space-y-5 flex flex-col items-center'>
        <p className='text-[16px]'>Kentaro Oshimoto  © {new Date().getFullYear()}</p>
      </div>
      <div>
      <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer