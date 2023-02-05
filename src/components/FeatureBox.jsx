import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FeatureBox = ({ img, path, text, color }) => {
    return (
        <Box
            as={Link}
            to={path}
            width={{ base: '110px', sm: '110px', md: '150px', xl: '238px' }}
            height={{ base: '75px', sm: '110px', md: '150px', xl: '238px' }}
            background={color}
            padding={{base: '10px', xl: '50px 0 25px 25px'}}
            rounded={'2xl'}
            _hover={{
                transform: "scale(1.05)"
            }}
        >
            <Image src={img} alt='icon image' width={{ base: '15px', sm: '30px', md: '40px', xl: '55.67px' }} />
            <Heading
                as='h4'
                size={{base: 'xs', md: 'md', xl:'lg'}}
                marginTop={{
                    base: path === 'clima' ? '20px' : '10px',
                    xl: path === 'clima' ? '55px' : '15px'}}
            >
                {text}
            </Heading>
        </Box>
    )
}

export default FeatureBox