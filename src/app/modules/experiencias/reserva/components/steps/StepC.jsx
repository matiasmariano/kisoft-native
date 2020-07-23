import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import ButtonK from '../../../../../shared/components/inputs/ButtonK';
import InputText from '../../../../../shared/components/inputs/InputText';

const StepC = ({ inputReserva, setInputReserva, setStepNumber }) => {
    return (
        <View style={styles.container}>
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, nombre: value } })}
                placeholder="Nombre"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.nombre} />
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, apellido: value } })}
                placeholder="Apellido"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.apellido} />
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, dni: value } })}
                placeholder="DNI"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.dni} />
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, mail: value } })}
                placeholder="Mail"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.mail} />
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, telefono: value } })}
                placeholder="Teléfono"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.telefono} />
            <InputText
                containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                onChangeText={value => setInputReserva({ ...inputReserva, datosPersonales: { ...inputReserva.datosPersonales, celular: value } })}
                placeholder="Celular"
                secureTextEntry={true}
                value={inputReserva.datosPersonales.celular} />
            <View style={styles.buttonContainer}>
                <ButtonK
                    title="Anterior"
                    style={styles.backButton}
                    onPress={() => setStepNumber('B')} />
                <ButtonK
                    title="Siguiente"
                    disabled={!Object.values(inputReserva.datosPersonales).every(o => o !== '')}
                    style={styles.nextButton}
                    onPress={() => setStepNumber('D')} />
            </View>
        </View>
    )
}

export default StepC;

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