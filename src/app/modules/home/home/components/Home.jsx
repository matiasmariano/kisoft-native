import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Filtros from '../../../../shared/components/filtros/Filtros'

const home = ({ navigation, route, filterModalOpened, setFilterModalStatus }) => {
    return (
        <View style={styles.container}>
            <Text>Pantalla principal</Text>

            <Filtros isModalVisible={filterModalOpened}
                     setIsModalVisible={setFilterModalStatus}/>
        </View>
    )
}

export default home;

const styles = {
    container: {
        backgroundColor: 'white',
        marginTop: '2%',
    }
}