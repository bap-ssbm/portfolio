import { FC } from 'react'
import { DiReact, DiGitMerge, DiNpm, DiJavascript1, DiNodejsSmall, DiMongodb } from 'react-icons/di'
import { FiFramer } from 'react-icons/fi'

import CodingItem from './CodingItem'
import { TbBrandNextjs, TbBrandTypescript,TbBrandTailwind, TbBrandThreejs, TbBrandBootstrap,TbBrandVercel, TbBrandVite } from 'react-icons/tb'
interface CodingProps {

}

const Coding: FC<CodingProps> = ({ }) => {
    return (
        <div className='w-full'>
            <h2 className='text-[20px] font-Oswald mb-5'>Tech Stack</h2>
            <ul className='text-[12px] lg:text-[16px] grid grid-rows-2 grid-cols-2 w-full grid-flow-row gap-5 p-5 lg:p-10 border rounded-lg shadow-lg bg-white dark:bg-black'>
                <CodingItem logo={<DiReact />}>ReactJS</CodingItem>
                <CodingItem logo={<TbBrandNextjs />}>NextJs</CodingItem>
                <CodingItem logo={<TbBrandTypescript />}>Typescript</CodingItem>
                <CodingItem logo={<DiJavascript1/>}>Javascript</CodingItem>
                <CodingItem logo={<FiFramer />}>Framer-Motion</CodingItem>
                <CodingItem logo={<DiGitMerge/>}>Git/Github</CodingItem>
                <CodingItem logo={<DiNpm/>}>Npm</CodingItem>
                <CodingItem logo={<DiNodejsSmall/>}>NodeJs</CodingItem>
                <CodingItem logo={<DiMongodb/>}>MongoDB</CodingItem>
                <CodingItem logo={<TbBrandTailwind/>}>TailwindCSS</CodingItem>
                <CodingItem logo={<TbBrandThreejs/>}>ThreeJS/ThreeFiber</CodingItem>
                <CodingItem logo={<TbBrandBootstrap/>}>Bootstrap</CodingItem>
                <CodingItem logo={<TbBrandVercel/>}>Vercel</CodingItem>
                <CodingItem logo={<TbBrandVite/>}>Vite</CodingItem>
            </ul>
        </div>
    )
}

export default Coding