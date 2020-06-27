import React from 'react'
import { Text, View } from 'react-native'


const DetalleNovedad = (props) => {

    const { Nombre } = props.route.params;

    return(
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Text>DetalleNovedad</Text>
            <Text>
                { Nombre }
            </Text>
        </View>
    )
}

export default DetalleNovedad;