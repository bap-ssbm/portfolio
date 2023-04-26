import React, { FC } from 'react'

interface CodingItemProps {
    children: React.ReactNode,
    logo: React.ReactNode
}

const CodingItem: FC<CodingItemProps> = ({logo, children }) => {
    return (
        <li className='flex gap-3 lg:gap-5 items-center w-fit'>
            <span>{logo}</span>{children}
        </li>
    )
}

export default CodingItem