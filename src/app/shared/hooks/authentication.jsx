import { useState, useEffect } from "react"
import { AsyncStorage } from 'react-native'
import { TOKEN_EXPIRED } from '../consts/apiRequestStatus'
import { getToken, validateToken, getPassword, getJWT } from '../services/Account';

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)
    const [token, setToken] = useState(undefined)

    const authenticate = async (user, pass) => {
        let platform = 'ios'
        let deviceId = '123'

        //Obtiene la key...
        let key = await getToken(user)

        //Validación de token...
        setToken(await AsyncStorage.getItem('USER_TOKEN'))
        let request = await validateToken(token)
        if (request.data.status === TOKEN_EXPIRED) {
            request = await getPassword(user, key)
            if (request.okResponse) {
                await AsyncStorage.setItem(
                    'USER_TOKEN',
                    request.data.data.token
                );
                setToken(request.data.data.token)
            }
        }

        let userRequest = await getJWT(user, token, platform, deviceId)
        if (userRequest.okResponse)
            setUserData(userRequest.data)
    }

}
const logout = () => (setUserData(undefined))

return { userData, authenticate, logout }
}