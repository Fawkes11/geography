import { Outlet } from "react-router-dom"
import banner from '../assets/banner_pic.png'
import { Image } from '@chakra-ui/react'


const RootLayout = () => {
    return (
        <>
            <Image
                src={banner}
                alt='Banner Image'
                fit={'cover'}
                width={'100%'}
                height={{ base: '180px', lg: '361px' }}
            />

            <Outlet />
        </>
    )
}

export default RootLayout