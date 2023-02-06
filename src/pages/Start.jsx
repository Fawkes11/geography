import { Button, VStack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'


const Start = () => {
    return (
        <AnimatePresence>
            <VStack
                as={motion.div}
                height={'100vh'}
                justifyContent={'center'}
                spacing={'70px'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    type: "tween",
                    duration: 300,
                    ease: "easeInOut"
                }}

            >
                <Logo />
                <Button
                    as={Link}
                    to='/geography'
                    color={'#FFFFFF'}
                    fontSize={'25px'}
                    width={'193px'}
                    height={'67px'}
                    borderRadius='34px'
                    background='#0071E3'
                    _hover={{
                        background: '#FB526A',
                    }}
                >
                    Start
                </Button>
            </VStack>
        </AnimatePresence>
    )
}

export default Start
