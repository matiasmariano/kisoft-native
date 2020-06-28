import React, { Component, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';

const Experiencia = ({ navigation, route }) => {

    useEffect(() => {
        // ejecutar el llamado a la api para obtener el detalle.
    }, [])

    const { catalogo } = route.params;

    return (
        <>
        </>
    );
};

export default Experiencia;