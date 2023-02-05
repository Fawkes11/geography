import { Grid, GridItem } from '@chakra-ui/react'
import { InformationBox } from './InformationBox'

const CustomGridItem = (props) => {

    return (
        <GridItem pl='2' background={'#E8E8E8'} {...props} borderRadius={'10px'} />
    )

}


const generalInfo = {
    area: {
        mainHeading: 'Área',
        text: '504,750 km2'
    },
    poblacion: {
        mainHeading: 'Población',
        text: '46.157.822'
    },
    religion: {
        mainHeading: 'Religion',
        text: '99% Católica'
    },
    lenguas: {
        mainHeading: 'Lenguas',
        subHeading: 'Lengua Oficial',
        text: 'Español (también denominado Castellano), Catalán, Gallego, Valenciano y Vasco(son también lenguas oficiales de las comunidades autonomas de Cataluña, Galicia, Valencia, País Vasco, respectivamente).'
    },
    capital: {
        mainHeading: 'Capital',
        text: 'Madrid',
        crossType: 'absolute'
    },
    gobierno: {
        mainHeading: 'Forma de Gobierno',
        text: 'Monarquía Constitucional',
        crossType: 'absolute'
    },
    jefe: {
        mainHeading: 'Jefe de Estado',
        text: 'Rey Felipe VI',
        crossType: 'absolute'
    },
    presidente: {
        mainHeading: 'Presidente del Gobierno',
        text: 'Pedro Sánchez',
        crossType: 'absolute'
    },
}



const GridInformation = () => {
    return (
        <Grid
            templateAreas={`"area lenguas capital jefe"
"area lenguas capital jefe"
"poblacion lenguas capital jefe"
"poblacion lenguas gobierno presidente"
"religion lenguas gobierno presidente"
"religion lenguas gobierno presidente"`}
            gridTemplateRows={'repeat(6, 61px)'}
            gridTemplateColumns={'193px 260px 187px 187px'}
            gap={1}
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <CustomGridItem area={'area'}>
                <InformationBox
                    mainHeading={generalInfo.area.mainHeading}
                    text={generalInfo.area.text}
                />
            </CustomGridItem>
            <CustomGridItem area={'lenguas'}>
                <InformationBox
                    mainHeading={generalInfo.lenguas.mainHeading}
                    subHeading={generalInfo.lenguas.subHeading}
                    text={generalInfo.lenguas.text}
                />
            </CustomGridItem>

            <CustomGridItem area={'poblacion'}>
                <InformationBox
                    mainHeading={generalInfo.poblacion.mainHeading}
                    text={generalInfo.poblacion.text}
                />
            </CustomGridItem>

            <CustomGridItem area={'religion'}>
                <InformationBox
                    mainHeading={generalInfo.religion.mainHeading}
                    text={generalInfo.religion.text}
                />
            </CustomGridItem>
            <CustomGridItem area={'capital'}>
                <InformationBox
                    mainHeading={generalInfo.capital.mainHeading}
                    text={generalInfo.capital.text}
                    crossType={generalInfo.capital.crossType}
                />
            </CustomGridItem>
            <CustomGridItem area={'jefe'}>
                <InformationBox
                    mainHeading={generalInfo.jefe.mainHeading}
                    text={generalInfo.jefe.text}
                    crossType={generalInfo.jefe.crossType}
                />
            </CustomGridItem>
            <CustomGridItem area={'gobierno'}>
                <InformationBox
                    mainHeading={generalInfo.gobierno.mainHeading}
                    text={generalInfo.gobierno.text}
                    crossType={generalInfo.gobierno.crossType}
                />
            </CustomGridItem>
            <CustomGridItem area={'presidente'}>
                <InformationBox
                    mainHeading={generalInfo.presidente.mainHeading}
                    text={generalInfo.presidente.text}
                    crossType={generalInfo.presidente.crossType}
                />
            </CustomGridItem>


        </Grid>
    )
}

export default GridInformation