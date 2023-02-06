import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import FeatureBox from './FeatureBox'
import iconInfo from '../assets/icon-info.png'
import iconFlag from '../assets/icon-flag.png'
import iconhome from '../assets/icon-home.png'
import iconWeather from '../assets/icon-weather.png'
import { AnimatePresence, motion } from 'framer-motion'



const menuData = [
    {
        img: iconInfo,
        path: 'informacion-general',
        text: 'Informacion general',
        color: '#E8E8E8'
    },
    {
        img: iconFlag,
        path: 'insignias-nacionales',
        text: 'Insignias nacionales',
        color: '#E8E8E8'
    },
    {
        img: iconhome,
        path: 'ciudades-principales',
        text: 'Ciudades principales',
        color: '#E8E8E8'
    },
    {
        img: iconWeather,
        path: 'clima',
        text: 'Clima',
        color: '#333333'
    }

]

const menuVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        x: 500,
        duration: 2,
        transition: {ease: "easeInOut"}
    }
}


const MainMenu = () => {
    return (
        <AnimatePresence>
            <Box
                as={motion.div}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height='100%'
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                >

                <Grid
                    templateColumns={'repeat(2, 1Fr)'}
                    gap={3}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    {
                        menuData.map((data, index) =>
                            <FeatureBox key={index} {...data} />
                        )
                    }
                </Grid>
            </Box>
        </AnimatePresence>
    )
}

export default MainMenu