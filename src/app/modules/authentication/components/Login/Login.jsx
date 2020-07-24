import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNotifications } from '../../../../shared/hooks/notifications'
//import { usePayment } from '../../../../shared/hooks/payment'

import ButtonK from '../../../../shared/components/inputs/ButtonK';
import InputText from '../../../../shared/components/inputs/InputText';
import ImageK from '../../../../shared/components/outputs/ImageK';

import styles from '../../../../../assets/stylesheets/login.scss';
import image from '../../../../../assets/imagenes/login.png';

import { buttonStyle } from '../../../../../assets/style/ButtonStyle';


const Login = ({ authenticate }) => {
    const { token, getToken } = useNotifications()
    //const { processPayment, statusPayment } = usePayment()
    const [user, setUser] = useState('usuario_1@valijachica.com.ar');
    const [pass, setPass] = useState('');

    getToken()
    //  processPayment('4507990000004905', '08', '20', '123', 'John Doe', '25123456', 1200)
    return (
        <View>
            <View>
                <ImageK
                    containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                    source={image}
                    style={{ width: '100%', height: 200, marginTop: '40%', resizeMode: 'center' }}
                />
            </View>
            <View style={{ alignContent: 'center' }}>
                <InputText
                    containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                    onChangeText={value => setUser(value)}
                    placeholder="Usuario"
                    value={user} />
                <InputText
                    containerStyle={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                    onChangeText={value => setPass(value)}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    value={pass} />
                <ButtonK
                    style={buttonStyle.login.login}
                    onPress={() => authenticate(user, pass)}
                    title={`Iniciar Sesion`} />
                <ButtonK
                    style={styles.backgroundTransparent}
                    titleStyle={{ color: 'rgb(122, 122, 244)' }}
                    onPress={() => authenticate(user, pass)}
                    title={`Resetea tu clave aqui`} />
            </View>
        </View >
    )
}

export default Login;