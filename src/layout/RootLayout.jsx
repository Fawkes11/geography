import { Outlet } from "react-router-dom"
import banner from '../assets/banner_pic.png'
import { Container, Heading, Image, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from "framer-motion"

const headingsVariants = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1.8,
            ease: "easeInOut"
        }
    }
}

const laptopVariants = {
    hidden: {
        opacity: 0,
        y: 200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 1,
            ease: "easeInOut",
            delay: 0.8
        }
    },
    exit: {
        opacity: 0,
        y: 200
    }
}


const RootLayout = () => {
    return (
        <AnimatePresence>

            <Image
                as={motion.img}
                src={banner}
                alt='Banner Image'
                fit={'cover'}
                width={'100%'}
                height={{ base: '180px', lg: '361px' }}
                variants={headingsVariants}
                initial="hidden"
                animate="visible"
            />


            <Container
                as={motion.div}
                textAlign={'center'}
                maxW='960px'
                variants={headingsVariants}
                initial="hidden"
                animate="visible"
            >
                <Heading as={'h1'}>
                    Geografía
                </Heading>
                <Heading as={'h3'}>
                    Aprende más de España
                </Heading>
                <Text textAlign={'justify'} fontSize={'24px'} width={'100%'}>
                    La mayor parte del territorio de España está integrada, junto con Portugal y Andorra, en la unidad geográfica de la península Ibérica, situada en el extremo suroccidental de Europa. Comprende, además, un conjunto de terrenos insulares como los archipiélagos de Canarias y Baleares.
                </Text>
            </Container>

            <motion.div
                variants={laptopVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Outlet />
            </motion.div>



        </AnimatePresence>
    )
}

export default RootLayout