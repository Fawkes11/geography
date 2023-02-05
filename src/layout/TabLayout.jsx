import { Box, Flex, Image } from '@chakra-ui/react'
import tab_image from '../assets/tab.png'

const TabLayout = ({children}) => {
    return (
        <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} marginBottom={'65px'}>

                <Box
                    width={'100%'}
                    maxW={'1250px'}
                    position={'relative'}
                >
                    <Image
                        src={tab_image}
                        width={'100%'}
                    />
                    <Box
                        position={'absolute'}
                        width={'90.5%'}
                        height={'89.5%'}
                        top={'9%'}
                        left={'5%'}
                    >
                        {children}

                    </Box> 

                </Box>
            </Flex>
    )
}

export default TabLayout