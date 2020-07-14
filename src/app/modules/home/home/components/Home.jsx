import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const home = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Pantalla principal</Text>
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