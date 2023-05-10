import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/buttons/Button'
import PortfolioImgWrapper from '../ui/PortfolioImgWrapper'

interface ProjectsWrapperProps {

}

const ProjectsWrapper: FC<ProjectsWrapperProps> = ({ }) => {
    return (
        <div id='portfolio-section-wrapper' className='pb-10 flex flex-col items-center gap-10'>
            <div className='grid place-content-center grid-rows-2 grid-cols-2 items-center justify-center lg:flex-row py-10 gap-10'>
                <PortfolioImgWrapper href='/portfolio/minimalistic-space-poster' src='/images/portfolio/personal/spa/space-posters-preview.jpg' />
                <PortfolioImgWrapper href='/portfolio/oshimoto-net' src='/images/portfolio/personal/oshimoto.net.jpg' />
                <PortfolioImgWrapper href='/portfolio/portfolio' src='/images/portfolio/personal/personal/final_portfolio.jpg' />
                <PortfolioImgWrapper href='/portfolio/seta-tei' src='/images/portfolio/personal/seta-tei.jpg' />

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