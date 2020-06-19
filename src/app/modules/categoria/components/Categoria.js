import React, {Component} from 'react';
import { View, Text } from 'react-native';

const Categoria = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
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