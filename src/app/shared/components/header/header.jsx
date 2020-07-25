import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { decimalFormat } from '../../helpers/FormaterHelper';

const header = ({ points, title, descuenta = false }) => (
    <>
        <View style={styles.extenderHead}></View>
        {points
            ?
            <View style={styles.pointsContainer}>
                {
                    descuenta ? <Text>Costo en puntos</Text> : <Text>Tus puntos</Text>
                }
                <Text style={{ fontSize: 25 }}>{decimalFormat(points)}</Text>
                <View style={styles.line} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
            :
            null}
    </>
);

export default header;

const styles = {
    extenderHead: {
        width: '100%',
        height: '10%',
        backgroundColor: 'rgb(227, 0, 27)',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    pointsContainer: {
        width: '80%',
        height: 105,
        backgroundColor: 'white',
        marginLeft: '10%',
        marginBottom: 10,
        marginTop: '-14%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        alignItems: 'center',
        // padding: 20,
        borderRadius: 15,
        elevation: 4,
        paddingTop: 10
    },
    line: {
        backgroundColor: 'black',
        height: '1%',
        width: '75%',
        margin: 5
    },
    headerText:{
        fontSize: 14,
    }
}