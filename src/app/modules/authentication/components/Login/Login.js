import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useAuthentication } from '../../../../shared/hooks/authentication';
import ButtonK from '../../../../shared/components/inputs/ButtonK';
import InputText from '../../../../shared/components/inputs/InputText';
import ImageK from '../../../../shared/components/outputs/ImageK';

import styles from '../../../../../assets/stylesheets/login.scss';
import image from '../../../../../assets/imagenes/login.png';

const Login = ({ navigation, action }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [systemVersion, setSystemVersion] = useState('');
    const { userData, authenticate } = useAuthentication()

    useEffect(() => {
        //DeviceInfo.getSystemVersion().then(systemVersion => {
        //iOS: "11.0"
        //     setSystemVersion(systemVersion);
        //   });
    }, []);

    return (
        <View style={styles.barraSuperior}>
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
                    buttonStyle={{ backgroundColor: 'rgb(227, 0, 27)', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                    onPress={() => navigation.navigate("Home")}
                    title={`Iniciar Sesion`} />
                <ButtonK
                    style={styles.backgroundTransparent}
                    titleStyle={{ color: 'rgb(122, 122, 244)' }}
                    onPress={() => navigation.navigate("Home")}
                    title={`Resetea tu clave aqui`} />
            </View>
        </View >
    )
}

export default Login;