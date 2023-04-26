import { FC } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

interface IconsProps {

}

const SocialIcons: FC<IconsProps> = ({ }) => {
  return (
    <div className='flex gap-14 text-[20px]'>
      <a className='hover:scale-125 transition duration-300' href="https://github.com/bap-ssbm">
        <div>
          <AiFillGithub />
        </div>

      </a>
      <a className='hover:scale-125 transition duration-300' href='https://www.linkedin.com/in/kentaro-oshimoto-4114a0196/'>
        <div>
          <AiFillLinkedin />
        </div>

      </a>
      <a className='hover:scale-125 transition duration-300' href='https://mail.google.com/mail/u/0/?fs=1&to=ken.oshimoto@gmail.com&su=SUBJECT&body=BODY&tf=cm'>
        <div>
          <SiGmail />
        </div>

      </a>
    </div>
  )
}

export default SocialIcons