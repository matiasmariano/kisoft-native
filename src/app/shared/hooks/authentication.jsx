import { useState, useEffect } from "react"
import { AsyncStorage } from 'react-native';
import { TOKEN_EXPIRED } from '../consts/apiRequestStatus';
import { getToken, validateToken, getPassword, getJWT } from '../services/Account';

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)
    const [token, setToken] = useState('')

    const authenticate = async (user, pass) => {
        let platform = 'ios'
        let deviceId = '123'
        
        //Validación de token...
        let request = token.length > 0 ? await validateToken(token) : undefined;
        
        if (!request || request.data.status === TOKEN_EXPIRED) {
            //Obtiene la key...
            let loginToken = await getToken(user);
            let password = await getPassword(user, loginToken.data.data.token);
            let key = await getJWT(user, password.data.data.password, platform, deviceId);
            
            if (key.okResponse) {
                setToken(key.data.data.token);
                await AsyncStorage.setItem(
                    'USER_TOKEN',
                    key.data.data.token
                );
            }
        }
    }

    const logout = async () => {
        setToken('');
        await AsyncStorage.setItem(
            'USER_TOKEN',
            ''
        );
    }

    return { userData, authenticate, logout, token }
}

