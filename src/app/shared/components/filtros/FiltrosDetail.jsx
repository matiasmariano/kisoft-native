import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwasome from 'react-native-vector-icons/FontAwesome5';

const FiltrosDetail = ({ handlerUpdate, setIsModalVisible }) => {
    const [parametrosFiltro, setParametrosFiltro] = useState({

    })

    const onUpdate = () => {
        //go API...
        handlerUpdate({})
    }

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.filtroText}>Filtro</Text>
                    <IconAwasome
                        name="times"
                        color="#ffffff"
                        style={{marginRight: 33, marginTop: 30, marginBottom: 21, fontSize: 25}}
                        onPress={() => { setIsModalVisible(false) }}
                    />
                </View>
            </View>
        </>
    )
}

export default FiltrosDetail

const styles = {
    header: {
        height: 83,
        backgroundColor: 'rgb(228, 32, 40)',
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    filtroText: {
        color: 'white',
        fontSize: 30,
        marginTop: 21,
        marginBottom: 21,
        marginLeft: 18,
    }
}