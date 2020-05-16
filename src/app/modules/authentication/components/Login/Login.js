import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useAuthentication } from '../../../../shared/hooks/authentication';
import { transparent } from 'material-ui/styles/colors';
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
                <Image
                containerStyle={{width:'80%', marginLeft:'auto', marginRight:'auto'}}
                source={image}
                style={{ width: '100%', height: 200, marginTop: '40%', resizeMode:'center'}}
                />
            </View>
            <View style={{alignContent: 'center'}}>
                <Input
                    containerStyle={{width:'80%', marginLeft:'auto', marginRight:'auto'}}
                    onChangeText={value => setUser(value)}
                    placeholder="Usuario"
                    value={user} />
                <Input
                    containerStyle={{width:'80%', marginLeft:'auto', marginRight:'auto'}}
                    onChangeText={value => setPass(value)}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    value={pass} />
                <Button
                    buttonStyle={{backgroundColor: 'rgb(227, 0, 27)', width:'80%', marginLeft:'auto', marginRight:'auto'}}
                    onPress={() => navigation.navigate("Home")}
                    title={`Iniciar Sesion`} />
                <Button
                    buttonStyle={styles.backgroundTransparent}
                    titleStyle={{color: 'rgb(122, 122, 244)'}}
                    onPress={() => navigation.navigate("Home")}
                    title={`Resetea tu clave aqui`}></Button>
            </View>
        </View >
    )
}

export default Login;