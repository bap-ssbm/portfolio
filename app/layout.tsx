import './globals.css'
import Navbar from './MainComponents/ui/navbar/Navbar'
import Footer from './MainComponents/ui/footer/Footer'




export const metadata = {
  title: 'Kentaro | Portfolio',
  description: "Front-end web developer, Kentaro Oshimoto's Portfolio website. He specializes in reactJs and nextJs. Please check it out!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en">
      <head>
   
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body

        className='font-Lora text-black bg-gray-200 dark:bg-gray-900 dark:text-white overflow-x-hidden duration-500 pt-[50px] lg:pt-[100px] min-h-screen text-[14px]'>
          
        <Navbar />
        <div id='main-wrapper' className='lg:w-[90%] max-w-[1920px] mx-auto lg:border border-gray-700 dark:border-gray-400'>
          <div className='px-[2%] lg:p-20'>

            {children}

          </div>

        </div>
        <Footer />
      </body>

    </html>
  )
}
