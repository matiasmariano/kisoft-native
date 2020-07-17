import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { get } from '../services/experienciaServices';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from '../../../../shared/components/Carrusel'
import Header from '../../../../shared/components/header/header';
import TagPuntos from '../../../../shared/components/tagPuntos/TagPuntos'
import ButtonK from '../../../../shared/components/inputs/ButtonK'
import { Rating } from 'react-native-ratings';
import Map from '../../../../shared/components/map/Map'
import ModalK from '../../../../shared/components/modal/ModalK'

const Experiencia = ({ navigation, route }) => {

    const [experiencia, setExperiencia] = useState(undefined)
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const call = async () => {
            let e = await get(route.params.experienciaId)
            if (e.data)
                setExperiencia(e.data);
        }
        call()
    }, [])

    let imagenes = []
    if (experiencia) {
        experiencia.imagenes.forEach(imagen => {
            imagenes.push(<Image source={{ uri: imagen }} style={styles.imagen} />)
        });
    }

    return ( 
        experiencia ?
            <View style={styles.body}>
                <Header points={20000} title={experiencia.name} descuenta={true} title={experiencia.nombre} />
                <ScrollView>
                    <Carousel
                        itemsPerInterval={1}
                        items={imagenes}
                    />
                    <TagPuntos points={experiencia.costo} top={130} left={10} />
                    <View>
                        <Rating
                            type='heart'
                            count={5}
                            imageSize={30}
                            readonly={true}
                            startingValue={experiencia.puntuacion}
                            style={styles.heartStyle}
                        />
                    </View>
                    <View>
                        <Text style={[styles.screenTextStyle]}>
                            <Icon name="ios-pin" size={15} color="#E42028" />
                            <Text>{` ${experiencia.ubicacion}`}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.screenTextStyle]}>
                            <Icon name="ios-person" size={15} color="#E42028" />
                            <Text>{` Para ${experiencia.cantidadPersonas} personas`}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.screenTextStyle]}>
                            <Icon name="ios-clock" size={15} color="#E42028" />
                            <Text>{` Para ${experiencia.horario} personas`}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.screenTextDetalleStyle]}>
                            <Text>{experiencia.descripcion}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.verMapa} onPress={() => { setIsModalVisible(true) }}>
                            Ver Mapa
                        </Text>
                    </View>
                    <View style={styles.containerInformacion}>
                        <ButtonK title={'Reservar'} style={styles.styleButton} onPress={() => navigation.navigate('Reserva', { title: '', experienciaId: route.params.experienciaId })} />
                    </View>

                    <ModalK isModalVisible={isModalVisible}
                        componente={<Map
                            coordenadas={{
                                latitude: -34.724806,
                                longitude: -58.251333,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }} />}
                        onSwipeComplete={() => { setIsModalVisible(false) }} />
                </ScrollView>
            </View >
            :
            null
    );
};

export default Experiencia;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    },
    imagen: {
        width: '100%',
        height: 212,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 21,
    },
    heartStyle: {
        marginTop: 16, marginRight: '5%'
    },
    screenTextStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        marginTop: 10
    },
    screenTextDetalleStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        marginTop: 25
    },
    styleButton: {
        backgroundColor: 'rgb(227, 0, 27)',
        borderRadius: 10,
        width: 286,
        height: 41,
        marginLeft: '15%',
        marginTop: 26
    },
    map: {
        height: '60%',
        width: '100%',
        marginTop: '25%'
    },
    verMapa: {
        fontStyle: 'normal',
        fontSize: 17,
        color: 'rgb(56, 122, 171)',
        marginLeft: '40%',
        marginTop: 15
    }
};