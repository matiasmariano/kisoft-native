import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-ratings';

const Categoria = ({ navigation, route }) => {

    //TODO, Enviar solo el Id de la categoria por parametro y obtener aca el catalogo
    const { catalogo } = route.params;
    
    const catalogoList = catalogo.map(oferta => {
        return (
            <View style={styles.categoriaContainer} key={`oferta_${oferta.titulo}`}>
                <Image source={{ uri: oferta.imagen }} style={styles.imagen}/>
                <Text style={styles.titulo}>{oferta.titulo}</Text>
                <Rating
                    type='heart'
                    count={5}
                    imageSize={20}
                    readonly={true}
                    startingValue={oferta.puntuacion}
                    style={{paddingLeft: 0, alignItems: 'flex-start', marginLeft: '5%', marginTop: 5 }}
                    />
                <Text style={styles.descripcion} numberOfLines={3}>{oferta.descripcion}</Text>
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {catalogoList}
        </View>
    );
};

export default Categoria;

const styles = {
    container:{
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 20
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
    rating:{
        marginLeft: '5%'
    }
};