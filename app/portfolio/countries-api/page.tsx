import { FC } from 'react'
import AboutTemplate from '../components/AboutTemplate'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <AboutTemplate title='REST Countries API with color theme switcher'
            src='/images/portfolio/FrontEndMentor/countries-api.jpg'
            github='https://github.com/bap-ssbm/country-api'
            link='https://country-api-eight.vercel.app/'>
            <div className='text-center'>
                <h3 className='text-[16px] font-Oswald underline mb-4'>
                    Tech Stack
                </h3>
                <p>
                    Vue.js Tailwind Typescript
                </p>
            </div>
            <hr className='border-dashed border-black dark:border-white my-12' />
            <h2 className='font-Oswald text-[20px] mb-5'>
                About
            </h2>
            <p>
                This is an advanced level challenge on front-end mentor that fetches Api from <a href='https://restcountries.com/'>restcountries.com</a>
            </p>

            <h2 className='font-Oswald text-[18px] mt-5'>
                What I learned
            </h2>
            <p>
                This is one of my first projects with Vue. js so I learned alot about it. For example, state management of fetched data in an array, and filtering through that array with a ref from an input. 
                I also learned how to use Object Keys for objects to get the property of that object despite not knowing what it could be.
            </p>
            <h2 className='font-Oswald text-[18px] mt-5'>
            Your users should be able to:
            </h2>
            <p>
                See all countries from the API on the homepage
                <br/>
                Search for a country using an input field
                <br/>
                Filter countries by region
                <br/>
                Click on a country to see more detailed information on a separate page
                <br/>
                Click through to the border countries on the detail page
                <br/>
                Toggle the color scheme between light and dark mode
            </p>



        </AboutTemplate>
    )
}

export default page