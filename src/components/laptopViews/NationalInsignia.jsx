import { Box, Flex, Heading, HStack, Image, useDisclosure } from '@chakra-ui/react'
import LaptopLayout from '../../layout/LaptopLayout'
import tab_image from '../../assets/tab.png'
import spainFlag from '../../assets/spain_flag.png'
import CrossIcon from '../CrossIcon'
import InsigniaBox from '../InsigniaBox'

const insigniaData = {
    bandera: {
        mainHeading: "La bandera de España",
        img: spainFlag,
        text: 'Conocida como la rojigualda, fue adoptada como pabellón nacional de España en 1785 y ha sido la bandera nacional desde entonces. Su actual diseño de bandera nacional surgió con el Real Decreto de 28 de mayo de 1785, por el que Carlos III resuelve la realización de un concurso convocado para adoptar un nuevo pabellón de la Marina, eligiendo dos diseños: uno para los buques de guerra y otro para los mercantes'
    },
    marcha: {
        mainHeading: "La Marcha Real",
        text: 'Es uno de los himnos nacionales más antiguos de Europa: su primera mención aparece en 1761 en el Libro de la Ordenanza de los Toques de Pífanos y Tambores que se tocan nuevamente en la Infantería, compuestos por Don Manuel de Espinosa. 1761 de Manuel de Espinosa de los Monteros.'
    }
}

const NationalInsignia = () => {


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
                >Insignias nacionales</Heading>
                <HStack
                    spacing={2}
                    position={'absolute'}
                    top={'27%'}
                    left={'50%'}
                    transform={'translateX(-50%)'}>
                    <InsigniaBox {...insigniaData.bandera}/>
                    <InsigniaBox {...insigniaData.marcha}/>
                </HStack>

            </LaptopLayout>



        </>
    )
}

export default NationalInsignia