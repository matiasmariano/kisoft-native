import React, {Component} from 'react';
import { View, Text } from 'react-native';

const Categoria = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(route.params)}</Text>
        </View>
    );
};

export default Categoria;

const styles = {
    container:{
        backgroundColor: 'white',
        height: '100%'
    }
};