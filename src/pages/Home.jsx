import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import macbook from '../assets/macbook.png'
import landscape from '../assets/landscape.png'
import LaptopView from '../components/LaptopView'

const Home = () => {
    return (
        <>
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

            <Flex width={'100%'} justifyContent={'center'} alignItems={'center'}>

                <Box
                    width={'100%'}
                    maxW={'1200px'}
                    position={'relative'}
                >
                    <Image
                        src={macbook}
                        width={'100%'}
                    />
                    <Image
                        src={landscape}
                        position={'absolute'}
                        width={'76.7%'}
                        height={'76.3%'}
                        top={'6.35%'}
                        left={'12.1%'}
                    />
                    <Box
                        position={'absolute'}
                        width={'76.7%'}
                        height={'76.3%'}
                        top={'6.35%'}
                        left={'12.1%'}
                    >
                        <LaptopView/>

                    </Box>

                </Box>
            </Flex>

        </>
    )
}

export default Home


