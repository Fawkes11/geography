import { Box, Button, Flex, Heading, Image, Text, VStack, Link as ChakraLink } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import barcelona_img from '../../assets/barcelona_img.png'
import { InformationBox } from "../InformationBox"

const mainVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1,
            ease: "easeInOut",
            delay: 0.6
        }
    },
    exit: {
        opacity: 0,
    }
}

const tabVariants = {
    hidden: {
        opacity: 0.5,
        y: '-100vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
        }
    },
    exit: {
        opacity: 0,
        y: '-100vh'
    }
}

const CityView = () => {
    return (
        <AnimatePresence>
            <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} height='1080px'>


                <Flex maxW={'1400px'} width={'100%'}>

                    <Image 
                    as={motion.img}
                    variants={tabVariants}
                    initial="hidden"
                    animate={"visible"}
                    src={barcelona_img} width={'882px'} height={'885px'}
                    />
                    <Flex
                        as={motion.div}
                        variants={mainVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        flexDirection={'column'}
                        ml={'20px'}
                    >
                        <Heading fontSize={'124px'}>
                            Barcelona
                        </Heading>
                        <Text fontSize={'24px'}>
                            Barcelona, la capital de Cataluña, situada al noroeste en la costa mediterránea, es sin duda la ciudad más cosmopolita y económicamente más activa de España. <br />
                            Barcelona ha sido un importantísimo centro del modernismo, distinguiéndose especialmente por los trabajos de Antoni Gaudí, quien, junto con grandes artistas contemporáneos, ha dado a la ciudad un aspecto nuevo y excitante que la han situado en la cúspide del modernismo.
                        </Text>
                        <Flex
                            w={'100%'}
                            height={'80px'}
                            justifyContent={'space-around'}
                            alignItems={'center'}>
                            <Box
                                width={'50%'}
                                height={'67px'}
                                background={'#E8E8E8'}
                                borderRadius={'10px'}
                            >
                                <InformationBox
                                    mainHeading='Población'
                                    text='1.636.732'
                                />
                            </Box>

                            <Button
                                as={Link}
                                to='/geography'
                                color={'#FFFFFF'}
                                fontSize={'25px'}
                                ml={'15px'}
                                width={'193px'}
                                height={'67px'}
                                borderRadius='34px'
                                background='#0071E3'
                                _hover={{
                                    background: '#FB526A',
                                }}
                            >
                                Datos Curiosos
                            </Button>
                        </Flex>
                        <Heading fontSize={'68px'} fontWeight={400}>
                            Sitios turísticos
                        </Heading>

                        <VStack
                            justifyContent={'flex-start'}
                            alignItems={'flex-start'}
                            fontSize={'27px'}
                            color={'#0071E3'}
                        >
                            <ChakraLink as={Link} to='#'>Barrio Gótico {`>`}</ChakraLink>
                            <ChakraLink as={Link} to='#'>La Rambla {`>`}</ChakraLink>
                            <ChakraLink as={Link} to='#'>La Sagrada Familia {`>`}</ChakraLink>
                            <ChakraLink as={Link} to='#'>El Park Guell {`>`}</ChakraLink>
                            <ChakraLink as={Link} to='#'>Casa Batlló {`>`}</ChakraLink>
                        </VStack>

                    </Flex>
                </Flex>
            </Box>
        </AnimatePresence>
    )
}

export default CityView