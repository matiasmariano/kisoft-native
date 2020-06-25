import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Novedades from './Novedades'
import { useEffect } from 'react';


const dataNovedades = [
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:1
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:2
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:3
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:4
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:5
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:6
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:7
    },
    {
        Nombre: 'viaje cacun',
        Imagen: 'https://www.cronista.com/__export/1584130422133/sites/diarioelcronista/img/2020/03/13/turismo_viajes_aeropuertos_1_crop1534879874664_crop1584130387427_crop1584130421087.jpg_258117318.jpg',
        Puntos: 20,
        key:8
    }
];



const ListadoFlex = () => {
    
    const [ pantallaActual, setPantallaActual ] = useState('novedades')
    
    useEffect(() => {
        window.alert('Hola maty.!!')        

    }, [pantallaActual])
    
    return(
        <View style={ styles.container }>
             <View style={ styles.header }>
                 <TouchableOpacity style={ [styles.buttonHeader, pantallaActual == 'novedades'? styles.buttonHeaderActive : null ]}
                     onPress={() => setPantallaActual('novedades')}
                 >
                     <Text>Novedades</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={[ styles.buttonHeader, pantallaActual == 'otros'? styles.buttonHeaderActive : null ]}
                     onPress={() => setPantallaActual('otros') }
                 >
                     <Text>Otros</Text>
                 </TouchableOpacity>
             </View>
             <View style={ styles.body}> 
                 { pantallaActual == 'novedades'? <Novedades data={dataNovedades} />: <Text>Otros</Text> }
             </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        height: 60,
        flexDirection: 'row',
        borderColor: 'red',
        borderBottomWidth: 1
    },
    body:{
        flex: 1,
    },
    buttonHeader:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    buttonHeaderActive:{
        borderColor: 'red',
        borderBottomWidth: 3
    }
});

export default ListadoFlex;