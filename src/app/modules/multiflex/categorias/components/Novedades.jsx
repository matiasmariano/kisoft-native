import React from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'

const ItemNovedad = ({ navigation, data }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('DetalleNovedad', { Nombre: data.Nombre })}>
        <Text>{data.Nombre}</Text>
    </TouchableOpacity>
)

const Novedades = ({ navigation, data }) => (
    <FlatList
        data={data}
        renderItem={({ item }) => (<ItemNovedad data={item} navigation={navigation} />)}
    />
)

export default Novedades;

const styles = StyleSheet.create({
    itemContainer: {
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

