import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native'
import { decimalFormat } from '../../helpers/FormaterHelper'

const TagPuntos = ({ points, left = -5, top = 95 }) => {

    return (
        <>
            <View style={{
                height: 27,
                width: 89,
                backgroundColor: 'rgb(227, 0, 27)',
                position: 'absolute',
                top: top,
                left: left,
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3,
                flexDirection: 'row'
            }}>
                <Image source={require('../../../../assets/imagenes/coins.png')} style={styles.tagPuntosImage} />
                <Text style={styles.tagPuntosText}>{decimalFormat(points)}</Text>
            </View>
        </>
    )
};

export default TagPuntos;

const styles = StyleSheet.create({
    tagPuntosText: {
        color: 'white',
        marginTop: 3,
        marginLeft: 5
    },
    tagPuntosImage: {
        height: 20,
        width: 22,
        marginTop: 3,
        marginLeft: 5
    }
});