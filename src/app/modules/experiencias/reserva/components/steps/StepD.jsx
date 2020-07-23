import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import ButtonK from '../../../../../shared/components/inputs/ButtonK';

const StepD = ({ inputReserva, setInputReserva }) => {

    const confirmarReserva = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <ButtonK
                    title="Anterior"
                    style={styles.backButton}
                    onPress={() => setStepNumber('B')} />
                <ButtonK
                    title="Canjear"
                    disabled={!Object.values(inputReserva.datosPersonales).every(o => o !== '')}
                    style={styles.nextButton}
                    onPress={() => setStepNumber('D')} />
            </View>
        </View>
    )
}

export default StepD;

const styles = {
    container: {
        marginTop: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingRight: '11%'
    },
    nextButton: {
        backgroundColor: '#E0273E',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    },
    backButton: {
        backgroundColor: '#ffffff',
        color: '#E0273E',
        borderColor: '#E0273E',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    }
}