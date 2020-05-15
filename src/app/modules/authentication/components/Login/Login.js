import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
//import DeviceInfo from 'react-native-device-info';

import { useAuthentication } from '../../../../shared/hooks/authentication';
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
        <View /*style={manufacturer == 'Apple' ? styles.marginTopIOS : styles.none}*/>
            <View className="row">
                <View style={styles.barraSuperior}>

                </View>
                <View className="col-md-6">
                    <Text>Kisoft</Text>
                </View>
                <View className="col-md-6">
                    <Button onPress={() => navigation.navigate("Home", { color: "blue" })} title='ckick me'/>
                </View>
            </View>
        </View>
    )
}

export default Login;