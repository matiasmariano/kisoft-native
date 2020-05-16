import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useAuthentication } from '../../../../shared/hooks/authentication';
import { transparent } from 'material-ui/styles/colors';
import styles from '../../../../../assets/stylesheets/login.scss';

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
        <View /*style={styles.barraSuperior}*/>
            <View style={styles.image}>
                <Text>IMAGEN</Text>
            </View>
            <View style={styles.body}>
                <Input
                    onChangeText={value => setUser(value)}
                    placeholder="Usuario"
                    value={user} />
                <Input
                    onChangeText={value => setPass(value)}
                    placeholder="Contraseña"
                    value={pass} />
                <Button
                    /*buttonStyle={styles.button}*/
                    onPress={() => navigation.navigate("Home")}
                    title={`Iniciar Sesion`} />
                <Button
                    /*buttonStyle={styles.backgroundTransparent}*/
                    /*titleStyle={styles.secondaryButtonTitle}*/
                    onPress={() => navigation.navigate("Home")}
                    title={`Resetea tu clave aqui`}></Button>
            </View>
        </View >
    )
}

export default Login;