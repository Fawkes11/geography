import { Box, Flex, Image } from "@chakra-ui/react"
import macbook from '../assets/macbook.png'
import landscape from '../assets/landscape.png'

const LaptopLayout = ({children}) => {
    return (
        <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} marginBottom={'65px'}>

                <Box
                    width={'100%'}
                    maxW={'1250px'}
                    position={'relative'}
                >
                    <Image
                        src={macbook}
                        width={'100%'}
                    />
                    <Image
                        src={landscape}
                        position={'absolute'}
                        width={'76.7%'}
                        height={'76.3%'}
                        top={'6.35%'}
                        left={'12.1%'}
                    />
                    <Box
                        position={'absolute'}
                        width={'76.7%'}
                        height={'76.3%'}
                        top={'6.35%'}
                        left={'12.1%'}
                    >
                        {children}

                    </Box>

                </Box>
            </Flex>
    )
}

export default LaptopLayout