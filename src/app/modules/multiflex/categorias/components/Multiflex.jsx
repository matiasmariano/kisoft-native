import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Sorteos from './Sorteos'
import Header from '../../../../shared/components/header/header'

const Multiflex = ({ navigation }) => {

    const [pantallaActual, setPantallaActual] = useState('sorteos')

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>

            <Header points={20000} title={'Participá en el sorteo que más te guste'}/>

            <View style={styles.header}>
                <TouchableOpacity style={[styles.buttonHeader, pantallaActual == 'sorteos' ? styles.buttonHeaderActive : null]}
                    onPress={() => setPantallaActual('sorteos')}
                >
                    <Text style={[styles.textHeader, pantallaActual == 'sorteos' ? styles.textHeaderActive : null]}>Sorteos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonHeader, pantallaActual == 'canjes' ? styles.buttonHeaderActive : null]}
                    onPress={() => setPantallaActual('canjes')}
                >
                    <Text style={[styles.textHeader, pantallaActual == 'canjes' ? styles.textHeaderActive : null]}>Canjes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                {pantallaActual == 'sorteos' ? <Sorteos navigation={navigation} /> : <Text>Canjes</Text>}
            </View>
        </View>
    );
}

export default Multiflex;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 60,
        flexDirection: 'row',
        borderColor: 'red',
        // borderBottomWidth: 1
        justifyContent: 'center',
        //marginTop: 2
    },
    body: {
        flex: 1,
    },
    buttonHeader: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 160,
        // backgroundColor: 'red',
        marginHorizontal: 5,

        borderRadius: 5,
        padding: 0,
        backgroundColor: 'white',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2

    },
    buttonHeaderActive: {
        backgroundColor: 'rgb(227, 0, 27)'
    },
    textHeader: {
        color: '#181818',
        fontSize: 15,
        fontWeight: 'bold'
    },
    textHeaderActive: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }

});
