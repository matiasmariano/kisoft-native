import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../../shared/components/header/Header';

const Home = ({navigation}) => {

    let categorias = [{
        titulo: 'Gastronomia',
        img: 'https://laverdadonline.com/wp-content/uploads/2019/10/xgastronomia-almeria-plato-jpgqitokp_pz-qe_-pagespeed-ic-mwgxz8yzo4.jpg'
    },
    {
        titulo: 'Aventura',
        img: 'https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/934/7c6/9347c644653c46c9033dfed8415131ea/detenidos-seis-turistas-en-peru-por-defecar-y-causar-danos-en-machu-picchu.jpg?mtime=1579565836'
    },
    {
        titulo: 'Bienestar',
        img: 'https://www.bupasalud.com/sites/default/files/portada/2018-07/mobile/bienestar-bupa_767.jpg'
    },
    {
        titulo: 'Escapadas',
        img: 'https://www.actualidadviajes.com/wp-content/uploads/2017/09/escapada-fin-de-semana-equipaje.jpg'
    },{
        titulo: 'Gastronomia 2',
        img: 'https://laverdadonline.com/wp-content/uploads/2019/10/xgastronomia-almeria-plato-jpgqitokp_pz-qe_-pagespeed-ic-mwgxz8yzo4.jpg'
    },
    {
        titulo: 'Aventura 2',
        img: 'https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/934/7c6/9347c644653c46c9033dfed8415131ea/detenidos-seis-turistas-en-peru-por-defecar-y-causar-danos-en-machu-picchu.jpg?mtime=1579565836'
    },
    {
        titulo: 'Bienestar 2',
        img: 'https://www.bupasalud.com/sites/default/files/portada/2018-07/mobile/bienestar-bupa_767.jpg'
    },
    {
        titulo: 'Escapadas 2',
        img: 'https://www.actualidadviajes.com/wp-content/uploads/2017/09/escapada-fin-de-semana-equipaje.jpg'
    }]

    let categoriasList = categorias.map(categoria => {
        return(
            <View style={styles.categoriaContainer} key={`categoria_${categoria.titulo}`}>
                <Image source={{uri: categoria.img}} style={styles.imagen}/>
            </View>
        )
    })

    return (
        <View style={styles.container}>
               <Header navigation={navigation}/>
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
    categoriaContainer:{
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
    categoriasView:{
        flexDirection:'column',
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 13,
    }
  }