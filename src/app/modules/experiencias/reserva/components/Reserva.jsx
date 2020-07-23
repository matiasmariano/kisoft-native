import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'

import StepA from './steps/StepA'
import StepB from './steps/StepB'
import StepC from './steps/StepC'
import StepD from './steps/StepD'

import { getDisponibildad } from '../services/ReservaServices';

const Reserva = ({ navigation, route }) => {
    const [stepNumber, setStepNumber] = useState('A')
    const [expercienciaInfo, setExpercienciaInfo] = useState(undefined)
    const [inputReserva, setInputReserva] = useState(undefined)

    useEffect(() => {
        const call = async () => {
            let e = await getDisponibildad(route.params.experienciaId)
            if (e.data)
                setExpercienciaInfo(e.data);

            setInputReserva({
                dateTime: {
                    date: '',
                    houre: ''
                }, dateTimeAlt: {
                    date: '',
                    houre: ''
                },
                datosPersonales: {
                    nombre: '',
                    apellido: '',
                    dni: '',
                    mail: '',
                    telefono: '',
                    celular: ''
                }
            })
        }
        call()
    }, [])

    if (!inputReserva)
        return null

    let stepActual;
    switch (stepNumber) {
        case 'A':
            stepActual = <StepA setInputReserva={setInputReserva} inputReserva={inputReserva} setStepNumber={setStepNumber} />
            break;
        case 'B':
            stepActual = <StepB setInputReserva={setInputReserva} inputReserva={inputReserva} setStepNumber={setStepNumber} />
            break;
        case 'C':
            stepActual = <StepC setInputReserva={setInputReserva} inputReserva={inputReserva} setStepNumber={setStepNumber} />
            break;
        case 'D':
            stepActual = <StepD setInputReserva={setInputReserva} inputReserva={inputReserva} setStepNumber={setStepNumber} />
            break;
        default:
            break;
    }

    return (
        <View style={styles.body}>
            <ScrollView>
                {stepActual}
            </ScrollView>
        </View>
    )
}

export default Reserva;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    }
}