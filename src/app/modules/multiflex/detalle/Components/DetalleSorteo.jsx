import React from 'react'
import { Text, View } from 'react-native'


const DetalleSorteo = (props) => {

    const { Nombre } = props.route.params;

    return(
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Text>DetalleSorteo</Text>
            <Text>
                { Nombre }
            </Text>
        </View>
    )
}

export default DetalleSorteo;