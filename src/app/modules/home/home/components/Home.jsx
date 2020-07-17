import React, { Component, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const home = ({ navigation, route }) => (
    <View style={styles.container}>
        <Text>Pantalla principal</Text>
    </View>
)

export default home;

const styles = {
    container: {
        backgroundColor: 'white',
        marginTop: '2%',
    }
}