import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Modal } from 'react-native'
import { getSorteoById, suscribir } from '../../categorias/services/MultiplexServices'
import Spinner from '../../../../shared/components/spinner/Spinner'
import Header from '../../../../shared/components/header/header'
import ButtonK from '../../../../shared/components/inputs/ButtonK'
import Notificacion from '../../../../shared/components/notificacion/Notificacion'

const DetalleSorteo = (props) => {
    const { IdSorteo } = props.route.params;
    const [store, setStore] = useState({
        spinner: true,
        textSpinner: 'Cargando...',
        dataSorteo: {},
        modalSuscripcion: false
    });

    useEffect(() => {
        getSorteoById(IdSorteo).then((data) => {
            setTimeout(() => {
                setStore({ ...store, dataSorteo: data, spinner: false })
            }, 1000)
        }).catch((ex) => {
            setStore({ ...store, spinner: false })
        });
    }, [])

    const clickSucribir = (id) => {
        setStore({ ...store, spinner: true, textSpinner: '' })
        suscribir(id).then((data) => {
            setTimeout(() => {
                setStore({ ...store, spinner: false, modalSuscripcion: true });
            }, 1000)
        }).catch((ex) => {
            setTimeout(() => {
                setStore({ ...store, spinner: false });
            }, 1000)
        })
    }


    return (
        <View style={styles.container}>
            <Spinner visible={store.spinner} textContent={store.textSpinner} />
            <Notificacion
                message={'Estas suscrito papa!'}
                visible={store.modalSuscripcion}
                onClosed={() => setStore({ ...store, modalSuscripcion: false })}
                type={'info'}
            />

            <Header points={store.dataSorteo.costo} descuenta={true} title={}/>
            <ScrollView>
                <View style={styles.body}>
                    <Image style={styles.bodyImagen} source={{ uri: store.dataSorteo.imagen }} />
                    <Text style={styles.textParrafo, { fontWeight: '700' }}>Disfruta de una experiencia única con Punto Flex.</Text>

                    <View style={styles.containerInformacion}>
                        <Text style={styles.textParrafo, styles.textRed}>Estas participando por:</Text>
                        <Text style={styles.textParrafo}>{store.dataSorteo.detallePremio}</Text>
                    </View>
                    <View style={styles.containerInformacion, styles.containerUbicacion}>
                        <Image style={styles.imagenPin} source={require('../../../../../assets/imagenes/pin.png')} />
                        <Text style={styles.textParrafo, { marginLeft: 10 }}>{store.dataSorteo.ubicacion}</Text>
                    </View>
                    <View style={styles.containerInformacion}>
                        <Text style={styles.textParrafo, styles.textRed}>Información del sorteo</Text>
                        <Text style={styles.textParrafo}>{store.dataSorteo.descripcion}</Text>
                    </View>
                    <View style={styles.containerInformacion}>
                        <ButtonK title={'Suscribir'} style={styles.styleButton} onPress={() => clickSucribir(IdSorteo)} />
                    </View>
                </View>
            </ScrollView >
        </View>
    )
}

export default DetalleSorteo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        marginHorizontal: 40
    },
    bodyImagen: {
        height: 200,
        marginVertical: 10,
        borderRadius: 20,
        resizeMode: 'stretch',
    },
    containerInformacion: {
        marginVertical: 10
    },
    textRed: {
        color: 'red'
    },
    textParrafo: {
        color: '#3A3A3A',
        fontSize: 13
    },
    styleButton: {
        backgroundColor: 'rgb(227, 0, 27)',
        borderRadius: 8
    },
    imagenPin: {
        height: 16,
        width: 16
    },
    containerUbicacion: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
});
