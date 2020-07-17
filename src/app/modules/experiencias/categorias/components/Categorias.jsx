import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { get, getCatalogByCategoryId } from '../services/CategoriasServices';
import Filtros from '../../../../shared/components/filtros/Filtros'

const Categorias = ({ navigation, filterModalOpened, setFilterModalStatus }) => {

    const [categorias, setCategorias] = useState([])

    const irDetalleCategoria = async (titulo, id) => {
        let c = await getCatalogByCategoryId(id)
        if (c.data) {
            navigation.navigate('Categoria', { title: titulo, experiencias: c.data })
        }
    }

    const irDetalleCategoriaFiltrado = (data) => {
        navigation.navigate('Categoria', { title: '', experiencias: data })
    }

    useEffect(() => {
        const call = async () => {
            let c = await get()
            if (c.data)
                setCategorias(c.data);
        }
        call()
    }, [])

    let categoriasList = []
    categorias.forEach(categoria => {
        categoriasList.push(
            <>
                {
                    categoria &&
                    <TouchableHighlight style={styles.categoriaContainer} key={`categoria_${categoria.title}`} onPress={() => irDetalleCategoria(categoria.titulo, categoria.id)}>
                        <Image source={{ uri: categoria.img }} style={styles.imagen} />
                    </TouchableHighlight>
                }
                <Text style={styles.categoriaText} onPress={() => irDetalleCategoria(categoria.titulo, categoria.id)}> {categoria.titulo}</Text>
            </>
        )
    });

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.title}>Categorias</Text>
                <Text style={styles.subtitle}>Encontrá las experiencias que más te interesan</Text>

                <View style={styles.categoriasView}>
                    {categoriasList}
                </View>
            </ScrollView>

            <Filtros isModalVisible={filterModalOpened}
                setIsModalVisible={setFilterModalStatus}
                handlerUpdate={irDetalleCategoriaFiltrado} />
        </View>
    );
};

export default Categorias;


const styles = {
    container: { flex: 1 },
    title: {
        marginTop: hp('2%'),
        height: hp('5%'),
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 34,
        lineHeight: 46,
        marginLeft: 28,
        color: "#2d2c2c"
    },
    barraSuperior: {
        backgroundColor: 'rgb(227, 0, 27)',
        height: hp('10%')
    },
    subtitle: {
        height: hp('5%'),
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14.2,
        lineHeight: 19,
        color: '#4e4e4e',
        marginLeft: 28
    },
    categoriaContainer: {
        borderRadius: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        marginLeft: 28,
        width: wp('85%'),
        marginTop: hp('1%'),
        height: hp('14%'),
    },
    categoriasView: {
        flexDirection: 'column'
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    },
    categoriaText: {
        color: '#ffffff',
        fontSize: 35,
        marginTop: '-20%',
        marginLeft: '10%',
        marginBottom: '15%',
        textAlign: 'center',
        marginRight: 40,
        fontWeight: '700'
    }
}