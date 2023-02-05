import { Box, Heading, Image } from '@chakra-ui/react'
import LaptopLayout from '../../layout/LaptopLayout'
import tab_image from '../../assets/tab.png'
import GridInformation from '../GridInformation'




const GeneralInformation = () => {
    return (
        <>
            <LaptopLayout>
                <Image
                    src={tab_image}
                    width={'100%'} />
                <Heading
                    position={'absolute'}
                    top={'10%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                >Información General</Heading>
                <Box
                    position={'absolute'}
                    top={'27%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                >
                    <GridInformation />
                </Box>

            </LaptopLayout>



        </>
    )
}

export default GeneralInformation
