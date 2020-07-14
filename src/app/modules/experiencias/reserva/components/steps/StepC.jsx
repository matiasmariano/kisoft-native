import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import ButtonK from '../../../../../shared/components/inputs/ButtonK';

const StepC = ({ inputReserva, setInputReserva, setStepNumber }) => {
    return (
        <View style={styles.container}>
            <ButtonK
                title="Anterior"
                style={styles.nextButton}
                onPress={() => setStepNumber('B')} />
            <ButtonK
                title="Siguiente"
                disabled={!(inputReserva.dateTimeAlt.date !== '' && inputReserva.dateTimeAlt.houre !== '')}
                style={styles.nextButton}
                onPress={() => setStepNumber('D')} />
        </View>
    )
}

export default StepC;

const styles = {
    container: {
        marginTop: 50
    },
    nextButton: {
        backgroundColor: '#E0273E',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    }
}