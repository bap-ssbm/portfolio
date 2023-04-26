import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='Sneaker E-commerce Product Page'
            src='/images/portfolio/FrontEndMentor/sneakercompany.jpg'
            github='https://github.com/bap-ssbm/ecommerce-product-page'
            link='https://bap-ssbm.github.io/ecommerce-product-page/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    React.js, JavaScript, Regular CSS
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p className='mb-10'>
                This is challenge was made with react and I found that creating pages for products was easy with it since components and carousels are easy to make with it.
                I feel like this challenge proved to me that my skills in front-end web developer was imporving and that I'm able to make anything if given the design.
            </p>


            <p>
                Users should be able to:
            </p>
            <ul>
                <li>
                    View the optimal layout for the site depending on their device's screen size
                </li>
                <li>
                    See hover states for all interactive elements on the page
                </li>
                <li>
                    Open a lightbox gallery by clicking on the large product image
                </li>
                <li>
                    Switch the large product image by clicking on the small thumbnail images
                </li>
                <li>
                    Add items to the cart
                </li>
                <li>
                    View the cart and remove items from it
                </li>
                <li>
                    save data to local storage so that cart is saved even if page is refreshed
                </li>
            </ul>



        </AboutTemplate>
    )
}

export default page