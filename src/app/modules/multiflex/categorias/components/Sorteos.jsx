import React, { useState, useEffect } from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { get } from '../services/MultiplexServices';
import { decimalFormat } from '../../../../shared/helpers/FormaterHelper' 
import Spinner from '../../../../shared/components/spinner/Spinner';

const Sorteos = ({ navigation, data }) => {

    const [store, setStore] = useState({
        spinner: true,
        listNovedades: []
    })

    useEffect(()=>{
        get(2).then((c) => {
            setTimeout(() => 
            setStore({...store, spinner: false, listNovedades: c.data }), 
            1000)
        })
    },[])

    return(
        <View>
            <Spinner visible={store.spinner} textContent={'Cargando...'}/>
            <FlatList
                data={store.listNovedades}
                renderItem={({ item }) => (<ItemSorteo data={item} navigation={navigation} />)}
                ItemSeparatorComponent={() => <View style={styles.itemSeparador} />}
                ListEmptyComponent={() => <View style={{alignItems: 'center'}}><Text style={{fontWeight: 'bold', fontSize: 15}}>{!store.spinner?'No se encontraron sorteos.': ''}</Text></View>}
            />
        </View>
        
    );
}


const ItemSorteo = ({ navigation, data }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer} onPress={() => navigation.navigate('DetalleSorteo', { Nombre: data.Nombre })}>
        <Image style={styles.itemImagen} source={{ uri: data.imagen}} />
        <View style={styles.tagPuntos}>
            <Image source={require('../../../../../assets/imagenes/coins.png')} style={styles.tagPuntosImage} />
            <Text style={ styles.tagPuntosText}>{decimalFormat(data.costo)}</Text>
        </View>
        <Text style={ styles.itemText}>{data.titulo}</Text>
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
    itemImagen:{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 133
    },
    itemText:{
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
    },
    tagPuntos:{
        height: 27,
        width: 89,
        backgroundColor: 'rgb(227, 0, 27)',
        position: 'absolute',
        top: 95,
        left: -5,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        flexDirection: 'row'
    },
    tagPuntosText:{
        color: 'white',
        marginTop: 3,
        marginLeft: 5
    },
    tagPuntosImage:{
        height: 20,
        width: 22,
        marginTop: 3,
        marginLeft: 5
    }
});

