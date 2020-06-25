import React from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { navigate } from '../../../shared/components/RootNavigation'

const ItemNovedad = ({ data }) => {
    return(
        <TouchableOpacity style={styles.itemContainer} onPress={ () => navigate('DetalleNovedad', { Nombre: data.Nombre })}>
            <Text>{data.Nombre}</Text>
        </TouchableOpacity>
    );
}

const Novedades = (props) => {
    return(
        <FlatList
            data={props.data}
            renderItem={ ({item}) => (<ItemNovedad data={item} />)}
        />
    );
}
export default Novedades;

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 12,
        height: 180,
        padding: 15,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 3
    }
});

