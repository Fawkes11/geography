import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import CrossIcon from './CrossIcon'

export const InformationBox = (
    {
        mainHeading,
        subHeading = '',
        crossType = '',
        text,
    }) => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            width={'100%'}
            height={'100%'}
            onClick={onToggle}
            cursor='pointer'
            position='relative'
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            padding='10px'
        >
            <Flex
            display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={'100%'}
            >
                <Heading size={'md'}>
                    {mainHeading}
                </Heading>
                {
                    crossType === 'absolute' ?
                        <Box transform={isOpen ? 'rotate(45deg)' : 'rotate(0)'} position='absolute' right='20px' bottom='20px'>
                            <CrossIcon />
                        </Box>
                        :
                        <Box transform={isOpen ? 'rotate(45deg)' : 'rotate(0)'} >
                            <CrossIcon />
                        </Box>
                }
            </Flex>
            <Box display={isOpen ? 'block' : 'none'}>
                <Heading>
                    {subHeading}
                </Heading>
                <Text>
                    {text}
                </Text>
            </Box>

        </Box>
    )
}
