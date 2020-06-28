import React, { Component, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { get } from '../services/experienciaServices';

const Experiencia = ({ navigation, route }) => {

    const [experiencia, setExperiencia] = useState(undefined)

    useEffect(() => {
        const call = async () => {
            let e = await get(route.params.experienciaId)
            if (e.data)
                setExperiencia(e.data);
        }
        call()
    }, [])

    return (
        experiencia &&
        <View style={styles.body}>
            <Header points={20000} title={experiencia.name} descuenta={true} />
            <ScrollView>

            </ScrollView>
        </View >
    );
};

export default Experiencia;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    }
};