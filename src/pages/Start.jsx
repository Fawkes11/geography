import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const Start = () => {
    return (
        <VStack height={'100vh'} justifyContent={'center'} spacing={'70px'}>
            <Logo/>
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
                background:'#FB526A',
            }}
            >
                Start
            </Button>
        </VStack>
    )
}

export default Start
