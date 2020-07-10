import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../../shared/components/header/header';
import { get } from '../services/CategoriaService';
import TagPuntos from '../../../../shared/components/tagPuntos/TagPuntos'

const Categoria = ({ navigation, route }) => {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        const call = async () => {
            let c = await get(route.params.categoriaId)
            if (c.data)
                setCatalogo(c.data);
        }
        call()
    }, [])

    const irDetalleExperiencia = (titulo, id) => {
        navigation.navigate('DetalleExperiencias', { title: titulo, categoriaId: id })
    }

    const catalogoList = catalogo.map((oferta, index) => {
        return (
            <TouchableOpacity style={styles.categoriaContainer} key={`oferta_${oferta.titulo}`} onPress={() => irDetalleExperiencia('', oferta.id)}>
                <>
                    <Image source={{ uri: oferta.imagen }} style={styles.imagen} onPress={() => irDetalleExperiencia('', oferta.id)} />
                    <TagPuntos points={oferta.costo} top={170} left={10} />
                </>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.titulo}>{oferta.titulo}</Text>
                    <Rating
                        type='heart'
                        count={5}
                        imageSize={20}
                        readonly={true}
                        startingValue={oferta.puntuacion}
                        style={{ marginTop: 16, marginRight: '5%' }}
                    />
                </View>

                <Text style={styles.descripcion} numberOfLines={3}>{oferta.descripcion}</Text>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-pin" size={15} color="#E42028" />
                        <Text>{` ${oferta.ubicacion}`}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-person" size={15} color="#E42028" />
                        <Text>{` Para ${oferta.cantidad_personas} personas`}</Text>
                    </Text>
                </View>

                {index < (catalogo.length - 1) ? <View style={styles.lineCategorias} /> : <View style={styles.marginEnd} />}
            </TouchableOpacity >
        )
    })

    return (
        <View style={styles.body}>
            <Header points={20000} title={'Elegí la experiencia que más te guste'} />
            <ScrollView>
                <View style={styles.container}>
                    {catalogoList}
                </View>
            </ScrollView>
        </View >
    );
};

export default Categoria;

const styles = {
    container: {
        backgroundColor: 'white',
        marginTop: '2%',
    },
    imagen: {
        width: '90%',
        height: 212,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 21,
    },
    categoriaContainer: {
        marginTop: '5%'
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 11,
        marginLeft: '5%',
        fontSize: 19
    },
    descripcion: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        fontSize: 11,
        lineHeight: 15,
        fontWeight: 'normal'
    },
    rating: {
        marginLeft: '5%',
    },
    screenTextStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        marginTop: 6
    },
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    },
    lineCategorias: {
        backgroundColor: 'black',
        height: 1,
        width: '75%',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    marginEnd: {
        marginBottom: 50
    }
};