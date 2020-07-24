import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../../../shared/components/header/header';
import TagPuntos from '../../../../shared/components/tagPuntos/TagPuntos'
import Filtros from '../../../../shared/components/filtros/Filtros'

const Categoria = ({ navigation, route, filterModalOpened, setFilterModalStatus }) => {

    const [catalogo, setCatalogo] = useState([])

    useEffect(() => {
        setCatalogo(route.params.experiencias)
    }, [])

    const irDetalleExperiencia = (titulo, id) => {
        navigation.navigate('DetalleExperiencias', { title: titulo, experienciaId: id })
    }
    
    const catalogoList = catalogo && catalogo.data ? catalogo.data.map((oferta, index) => {
        return (
            <TouchableOpacity activeOpacity={.8} style={styles.categoriaContainer} key={`oferta_${oferta.id}`} onPress={() => irDetalleExperiencia('', oferta.id)}>
                <>
                    <Image source={{ uri: oferta.image_url }} style={styles.imagen} onPress={() => irDetalleExperiencia('', oferta.id)} />
                    <TagPuntos points={oferta.serviceCost} top={170} left={10} />
                </>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.titulo}>{oferta.public_name}</Text>
                    <Rating
                        type='heart'
                        count={5}
                        imageSize={20}
                        readonly={true}
                        startingValue={oferta.calificacion ? oferta.calificacion : 0}
                        style={{ marginTop: 16, marginRight: '5%' }}
                    />
                </View>

                <Text style={styles.descripcion} numberOfLines={3}>{oferta.description_general}</Text>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-pin" size={15} color="#E42028" />
                        <Text>{` ${oferta.city_name}, ${oferta.state_name}`}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-person" size={15} color="#E42028" />
                        <Text>{`${oferta.persons}`}</Text>
                    </Text>
                </View>

                {index < (catalogo.length - 1) ? <View style={styles.lineCategorias} /> : <View style={styles.marginEnd} />}
            </TouchableOpacity >
        )
    }) : [];

    return (
        <View style={styles.body}>
            <Header points={20000} title={'Elegí la experiencia que más te guste'} />
            <ScrollView>
                <View style={styles.container}>
                    {catalogoList}
                </View>
            </ScrollView>

            <Filtros isModalVisible={filterModalOpened}
                setIsModalVisible={setFilterModalStatus}
                handlerUpdate={setCatalogo}
                customStyle={styles.modal} />
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
    },
    modal:{
        shadowOpacity: 0.5,
        backgroundColor: '#E5E5E5',
        shadowOpacity: 0.3,
        flex: 1,
        margin: 0
    }
};