import { Box, Flex, Heading, HStack, Image, useDisclosure } from '@chakra-ui/react'
import LaptopLayout from '../../layout/LaptopLayout'
import tab_image from '../../assets/tab.png'
import spainFlag from '../../assets/spain_flag.png'
import CrossIcon from '../CrossIcon'
import InsigniaBox from '../InsigniaBox'
import { AnimatePresence, motion } from 'framer-motion'

const insigniaData = {
    bandera: {
        mainHeading: "La bandera de España",
        img: spainFlag,
        text: 'Conocida como la rojigualda, fue adoptada como pabellón nacional de España en 1785 y ha sido la bandera nacional desde entonces. Su actual diseño de bandera nacional surgió con el Real Decreto de 28 de mayo de 1785, por el que Carlos III resuelve la realización de un concurso convocado para adoptar un nuevo pabellón de la Marina, eligiendo dos diseños: uno para los buques de guerra y otro para los mercantes'
    },
    marcha: {
        mainHeading: "La Marcha Real",
        text: 'Es uno de los himnos nacionales más antiguos de Europa: su primera mención aparece en 1761 en el Libro de la Ordenanza de los Toques de Pífanos y Tambores que se tocan nuevamente en la Infantería, compuestos por Don Manuel de Espinosa. 1761 de Manuel de Espinosa de los Monteros.'
    }
}

const imageVariants = {
    hidden: {
        opacity: 0,
        y: '-50vh',
    },
    visible: {
        opacity: 1,
        y: '0',
        transition: {
            type: "spring",
            duration: 1.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        y: '-50vh',
    }
}

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
    }
}

const NationalInsignia = () => {


    return (
        <AnimatePresence>
            <LaptopLayout>
                <Image
                    as={motion.img}
                    src={tab_image}
                    width={'100%'}
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                />
                <Heading
                    as={motion.h2}
                    position={'absolute'}
                    top={'10%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >Insignias nacionales</Heading>
                <HStack
                    as={motion.div}
                    spacing={2}
                    position={'absolute'}
                    top={'27%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                    <InsigniaBox {...insigniaData.bandera} />
                    <InsigniaBox {...insigniaData.marcha} />
                </HStack>

            </LaptopLayout>



        </AnimatePresence>
    )
}

export default NationalInsignia