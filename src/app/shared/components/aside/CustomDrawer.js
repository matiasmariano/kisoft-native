import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { Divider } from 'react-native-elements';

const CustomDrawer = ({navigation, logout, activeItemKey}) => {
  return (
    <View>
        <Text>{JSON.stringify(navigation)}</Text>

        <View style={styles.screenContainer}>
            <View>
                <Text style={styles.name}>My Name</Text>
                <Text style={styles.email}>MyEmail@hotmail.com</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={[styles.screenStyle, (activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                <Text style={[styles.screenTextStyle, (activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={() => navigation.navigate('Home')}>Home</Text>
            </View>
            <View style={[styles.screenStyle, (activeItemKey=='Cobro') ? styles.activeBackgroundColor : null]}>
                <Text style={[styles.screenTextStyle, (activeItemKey=='Cobro') ? styles.selectedTextStyle : null]} onPress={() => navigation.navigate('Cobro')}>Cobro</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={[styles.screenStyle, (activeItemKey=='Cerrar Sesion') ? styles.activeBackgroundColor : null]}>
                <Text style={[styles.screenTextStyle, (activeItemKey=='Cerrar Sesion') ? styles.selectedTextStyle : null]} onPress={() => logout()}>Cerrar Sesion</Text>
            </View>
        </View>
    </View>
  );
};

export default CustomDrawer;

const styles = {
    screenContainer: { 
        paddingTop: 50,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 15,
        color: 'white',
        marginLeft: 24
    },
    selectedTextStyle: {
        fontWeight: 'bold',
    },
    activeBackgroundColor: {
        backgroundColor: 'red'
    },
    divider:{
        backgroundColor: 'white',
        width: '60%',
        marginLeft: 24,
        marginBottom: 39,
        marginTop: 39
    },
    name:{
        fontWeight: 'normal',
        fontSize: 22,
        lineHeight: 30,
        marginLeft: 24,
        color: 'white'
    },
    email: {
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 21,
        marginLeft: 24,
        color: 'white'
    }
};