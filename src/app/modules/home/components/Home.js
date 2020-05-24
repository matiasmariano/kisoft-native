import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = ({ navigation }) => {


    //BORRAR MOCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let categorias = [{
        titulo: 'Gastronomia',
        img: 'https://laverdadonline.com/wp-content/uploads/2019/10/xgastronomia-almeria-plato-jpgqitokp_pz-qe_-pagespeed-ic-mwgxz8yzo4.jpg'
    }]
    for (let index = 0; index < 6; index++) {
        categorias.push(categorias[index])

    }
    //BORRAR MOCK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    
    let categoriasList = categorias.map((categoria, index) => {
        return (
            <View style={styles.categoriaContainer} key={`categoria_${categoria.titulo}_${index}`}>
                <Image source={{ uri: categoria.img }} style={styles.imagen} />
            </View>
        )
    })

    return (
        <View style={styles.container}>
            {/*<Header navigation={navigation} />*/}
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
        fontWeight: 'normal',
        fontSize: 34,
        lineHeight: 46,
        marginLeft: 28
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
        color: '#E32028',
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
        width: wp('90%'),
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