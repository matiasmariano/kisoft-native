import React from "react";
import { View, Text, Image, ScrollView, TouchableHighlight } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ navigation }) => {


    //BORRAR MOCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let categorias = [{
        titulo: 'Gastronomia',
        img: 'https://laverdadonline.com/wp-content/uploads/2019/10/xgastronomia-almeria-plato-jpgqitokp_pz-qe_-pagespeed-ic-mwgxz8yzo4.jpg',
        catalogo: [{
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja',
            costo: 40000,
            ubicacion: 'Quilmes papi',
            cantidad_personas: 2
        },{
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'A la vuelta de la ezquina',
            cantidad_personas: 2
        }]
    }]
    //BORRAR MOCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    let categoriasList = []
    for (let i = 0; i < categorias.length; i += 1) {
        categoriasList.push(
            <>
                {categorias[i] && 
                <TouchableHighlight style={styles.categoriaContainer} key={`categoria_${i}`} onPress={() => navigation.navigate(`${categorias[i].titulo}`, {catalogo: categorias[i].catalogo })}>
                    <Image source={{ uri: categorias[i].img }} style={styles.imagen} />
                </TouchableHighlight>}
            </>
        )

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Categorias</Text>
                <Text style={styles.subtitle}>Encontrá las experiencias que más te interesan</Text>

                <View style={styles.categoriasView}>
                    {categoriasList}
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;


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
        height: hp('14%')
    },
    categoriasView: {
        flexDirection: 'column',
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    }
}