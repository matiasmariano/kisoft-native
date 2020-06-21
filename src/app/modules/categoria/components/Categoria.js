import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';

const Categoria = ({ navigation, route }) => {

    //TODO, Enviar solo el Id de la categoria por parametro y obtener aca el catalogo
    const { catalogo } = route.params;

    const catalogoList = catalogo.map(oferta => {
        return (
            <View style={styles.categoriaContainer} key={`oferta_${oferta.titulo}`}>
                <Image source={{ uri: oferta.imagen }} style={styles.imagen} />
                <Text style={styles.titulo}>{oferta.titulo}</Text>
                <Rating
                    type='heart'
                    count={5}
                    imageSize={20}
                    readonly={true}
                    startingValue={oferta.puntuacion}
                    style={{ paddingLeft: 0, alignItems: 'flex-start', marginLeft: '5%', marginTop: 5 }}
                />
                <Text style={styles.descripcion} numberOfLines={3}>{oferta.descripcion}</Text>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-pin" size={15} color="#E42028"/>   
                        <Text>{` ${oferta.ubicacion}`}</Text>
                    </Text>
                </View>

                <View>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-person" size={15} color="#E42028"/>   
                        <Text>{` Para ${oferta.cantidad_personas} personas`}</Text>
                    </Text>
                </View>
            </View>
        )
    })

    return (
        <View style={styles.body}>
            <View style={styles.extenderHead}></View>
            <View style={styles.pointsContainer}>
                <Text>Tus puntos</Text>
                <Text style={{ fontSize: 25 }}>10.000</Text>
                <View style={styles.line} />
                <Text>Elegí la experiencia que más te guste</Text>
            </View>
            <View style={styles.container}>
                {catalogoList}
            </View>
        </View>
    );
};

export default Categoria;

const styles = {
    pointsContainer: {
        width: '80%',
        height: '13%',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginTop: '-12%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        elevation: 4,
    }, extenderHead: {
        width: '100%',
        height: '6%',
        backgroundColor: 'rgb(227, 0, 27)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        marginTop: '2%'
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
        marginLeft: '5%'
    },
    line: {
        backgroundColor: 'black',
        height: '1%',
        width: '75%',
        margin: 5
    },
    screenTextStyle: {
        marginLeft: 20,
        marginTop: 6
    },
    body:{
        backgroundColor: '#ffffff'
    }
};