import { FC } from 'react'
import { DiPhotoshop, DiPython } from 'react-icons/di'
import { BsTranslate } from 'react-icons/bs'
import { SiRstudio, SiMicrosoftexcel, SiGooglesheets} from 'react-icons/si'

interface OtherSkillsProps {

}

const OtherSkills: FC<OtherSkillsProps> = ({ }) => {
    return (
        <div className='w-full'>
            <h2 className='text-[23px] font-Oswald italic mb-5'>Other Skills</h2>
            <ul className='text-[12px] lg:text-[16px] flex flex-col w-full grid-flow-row gap-5 p-5 lg:p-10 border rounded-lg shadow-lg bg-white dark:bg-black'>
                <li className='flex gap-4 items-center'>
                    <DiPhotoshop />
                    Photoshop
                </li>
                <li className='flex gap-4 items-center'>
                    <BsTranslate />
                    Translation/ JP to EN
                </li>
                <li className='flex gap-4 items-center'>
                    <SiRstudio />
                    R-studio
                </li>
                <li className='flex gap-4 items-center'>
                    <DiPython />
                    Python
                </li>
                <li className='flex gap-4 items-center'>
                    <SiMicrosoftexcel />
                    Excel
                </li>
                <li className='flex gap-4 items-center'>
                    <SiGooglesheets />
                    Google Sheets/Google App Script
                </li>
            </ul>
        </div>
    )
}

export default OtherSkills