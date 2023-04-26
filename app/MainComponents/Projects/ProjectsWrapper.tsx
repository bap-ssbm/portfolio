import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/buttons/Button'
import PortfolioImgWrapper from '../ui/PortfolioImgWrapper'

interface ProjectsWrapperProps {

}

const ProjectsWrapper: FC<ProjectsWrapperProps> = ({ }) => {
    return (
        <div id='portfolio-section-wrapper' className='pb-10 flex flex-col items-center'>
            <div className='flex w-full justify-center flex-col lg:flex-row py-10 gap-10'>

                <PortfolioImgWrapper href='/portfolio/space-tourism' src='/images/portfolio/FrontEndMentor/spacetourism.jpg'/>
                    
                
                <PortfolioImgWrapper href='/portfolio/oshimoto-net' src='/images/portfolio/personal/oshimoto.net.jpg'/>
             

            </div>
            <Link href="/portfolio">
                <Button>
                    Check Out More
                </Button>
            </Link>

        </div>
    )
}

export default ProjectsWrapper