import HeroSection from './MainComponents/Hero/HeroSection'
import AboutSection from './MainComponents/About/AboutSection'
import ProjectsSection from './MainComponents/Projects/ProjectsSection'


export default function Home() {

  return (
    <main className="flex flex-col items box-border gap-20 pt-5 ">

      <HeroSection />
      <div className='border-dashed  border-t border-black dark:border-white h-[1px] w-full' />
      <ProjectsSection />
      <div className='border-dashed  border-t border-black dark:border-white h-[1px] w-full' />
      <AboutSection />

    </main>
  )
}
