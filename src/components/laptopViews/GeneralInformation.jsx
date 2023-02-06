import { Box, Heading, Image } from '@chakra-ui/react'
import LaptopLayout from '../../layout/LaptopLayout'
import tab_image from '../../assets/tab.png'
import GridInformation from '../GridInformation'
import { AnimatePresence, motion } from 'framer-motion'




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
    exit:{
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
    },
    exit:{
        opacity: 0,
    }
}



const GeneralInformation = () => {
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
                    as={motion.h1}
                    position={'absolute'}
                    top={'10%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >Información General</Heading>
                <Box
                    as={motion.div}
                    position={'absolute'}
                    top={'27%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <GridInformation />
                </Box>

            </LaptopLayout>



        </AnimatePresence>
    )
}

export default GeneralInformation
