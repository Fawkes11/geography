import { Box, Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import tab_image from '../assets/tab.png'

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
            delay: 1
        }
    }
}

const TabLayout = ({ children }) => {
    return (
        <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} marginBottom={'65px'}>

            <Box
                width={'100%'}
                maxW={'1250px'}
                position={'relative'}
                overflow='hidden'
            >
                <Image
                    as={motion.img}
                    src={tab_image}
                    width={'100%'}
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit='exit'
                />
                <Box
                    as={motion.div}
                    position={'absolute'}
                    width={'90.5%'}
                    height={'89.5%'}
                    top={'9%'}
                    left={'5%'}
                    variants={mainVariants}
                    initial="hidden"
                    animate="visible"
                    exit='exit'
                >
                    {children}

                </Box>

            </Box>
        </Flex>
    )
}

export default TabLayout