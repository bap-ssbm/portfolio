'use client'



import { FC } from 'react'
import { Map, Overlay } from "pigeon-maps"
import { stamenToner } from 'pigeon-maps/providers'
import { FiCornerRightDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
interface LocationMapProps {

}

const LocationMap: FC<LocationMapProps> = ({ }) => {
    const position: [number, number] = [35.274621890594744, 139.57292516279432]


    return (

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:0.8, ease:'easeInOut'}}}
        className='h-full w-full overflow-hidden rounded-xl'>
            <Map
                provider={stamenToner}
                defaultCenter={position} defaultZoom={7}>
                <Overlay anchor={position} offset={[80, 30]}>
                    <a href='https://en.wikipedia.org/wiki/Hayama,_Kanagawa'>
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: -4, transition: { type: 'spring', repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', duration: 1.2 } }}
                            whileHover={{ scale: 1.1 }}
                            
                            className='bg-blue-300 border border-black rounded-full px-3  cursor-pointer'>
                            <h1 className='text-black text-[18px] flex italic items-center'>
                                I'm Here!
                                <FiCornerRightDown />
                            </h1>
                        </motion.div>
                    </a>
                </Overlay>
            </Map>
        </motion.div>

    )
}

export default LocationMap