import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import FeatureBox from './FeatureBox'
import iconInfo from '../assets/icon-info.png'
import iconFlag from '../assets/icon-flag.png'
import iconhome from '../assets/icon-home.png'
import iconWeather from '../assets/icon-weather.png'



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


const MainMenu = () => {
    return (
        <Box
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        height='100%'>

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
    )
}

export default MainMenu