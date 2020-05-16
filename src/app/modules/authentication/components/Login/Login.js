import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useAuthentication } from '../../../../shared/hooks/authentication';
import { transparent } from 'material-ui/styles/colors';

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
        <View style={styles.container}>
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
                    buttonStyle={styles.button}
                    onPress={() => navigation.navigate("Home")}
                    title={`INICIAR SESI$N`} />
                <Button
                    buttonStyle={{ backgroundColor: transparent }}
                    titleStyle={{ color: '#7a7af4' }}
                    onPress={() => navigation.navigate("Home")}
                    title={`Reseteá tu clave aqui`}></Button>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: hp('30%'),
        padding: '30%'
    },
    body: {
        width: wp('70%'),
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#E3001B',
        color: '#FFFFFF'
    }
})

export default Login;