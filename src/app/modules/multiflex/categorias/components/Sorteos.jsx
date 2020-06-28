import React, { useState, useEffect } from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { getSorteos } from '../services/MultiplexServices';
import Spinner from '../../../../shared/components/spinner/Spinner'
import TagPuntos from '../../../../shared/components/tagPuntos/TagPuntos'

const Sorteos = ({ navigation }) => {

    const [store, setStore] = useState({
        spinner: true,
        listNovedades: []
    })

    useEffect(() => {
        getSorteos().then((data) => {
            setTimeout(() =>
                setStore({ ...store, spinner: false, listNovedades: data }),
                1000)
        })
    }, [])

    return (
        <View>
            <Spinner visible={store.spinner} textContent={'Cargando...'} />
            <FlatList
                data={store.listNovedades}
                renderItem={({ item }) => (<ItemSorteo data={item} navigation={navigation} />)}
                ItemSeparatorComponent={() => <View style={styles.itemSeparador} />}
                ListEmptyComponent={() => <View style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold', fontSize: 15 }}>{!store.spinner ? 'No se encontraron sorteos.' : ''}</Text></View>}
            />
        </View>

    );
}

const ItemSorteo = ({ navigation, data }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer} onPress={() => navigation.navigate('DetalleSorteo', { IdSorteo: data.id })}>
        <Image style={styles.itemImagen} source={{ uri: data.imagen }} />
        <TagPuntos points={data.costo} />
        <Text style={styles.itemText}>{data.titulo}</Text>
    </TouchableOpacity>
);

export default Sorteos;

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        marginHorizontal: 29,
        marginVertical: 0,
        borderRadius: 12,
        height: 180,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 3
    },
    itemImagen: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 133
    },
    itemText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#181818',
        marginTop: 10,
        marginLeft: 20
    },
    itemSeparador: {
        backgroundColor: 'black',
        height: 1,
        marginHorizontal: 30,
        marginVertical: 15
    }
});

