import { Outlet } from "react-router-dom"
import banner from '../assets/banner_pic.png'
import { Container, Heading, Image, Text } from '@chakra-ui/react'


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


            <Container textAlign={'center'}>
                <Heading as={'h1'}>
                    Geografía
                </Heading>
                <Heading as={'h3'}>
                    Aprende más de España
                </Heading>
                <Text textAlign={'justify'}>
                    La mayor parte del territorio de España está integrada, junto con Portugal y Andorra, en la unidad geográfica de la península Ibérica, situada en el extremo suroccidental de Europa. Comprende, además, un conjunto de terrenos insulares como los archipiélagos de Canarias y Baleares.
                </Text>
            </Container>



            <Outlet />
        </>
    )
}

export default RootLayout