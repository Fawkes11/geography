import { Box, Flex, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import CrossIcon from './CrossIcon'

const InsigniaBox = ({mainHeading, img, text}) => {

    const { isOpen, onToggle } = useDisclosure()


    return (
        <Box

        onClick={onToggle}
        cursor="pointer"
        w={'398px'} h={'334px'}
        background={'#E8E8E8'}
        borderRadius={'20px'}
        padding={'20px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        >
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Heading size={'sm'}>
                    {mainHeading}
                </Heading>
                {
                    (img && !isOpen) && <Image src={img} />
                }
                <Box transform={isOpen ? 'rotate(45deg)' : 'rotate(0)'} >
                    <CrossIcon />
                </Box>
            </Flex>

            <Box display={isOpen ? 'block' : 'none'}>
                <Text textAlign={'justify'}>
                    {text}
                </Text>
            </Box>

        </Box>
    )
}

export default InsigniaBox