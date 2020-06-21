import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-ratings';

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
    body: {
        position: 'relative'
    },
    pointsContainer: {
        width: '80%',
        height: '9%',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginTop: '-7%',
        borderRadius: '8px',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        alignItems: 'center',
        padding: 10
    }, extenderHead: {
        width: '100%',
        height: '5%',
        backgroundColor: 'rgb(227, 0, 27)',
        borderBottomLeftRadius: '25',
        borderBottomRightRadius: '25'
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
        marginTop: 10
    },
    imagen: {
        width: '90%',
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    categoriaContainer: {
        marginTop: 40
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: '5%'
    },
    descripcion: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
    },
    rating: {
        marginLeft: '5%'
    },
    line: {
        backgroundColor: 'black',
        height: '1%',
        width: '75%',
        margin: 2
    }
};