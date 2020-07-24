import { useState, useEffect } from "react"
import { getToken } from '../services/Account';

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)

    const authenticate = async (user) => {
        let user_hard = 'usuario_1@valijachica.com.ar';
        let platform = 'ios';
        let deviceId = '123';
 
        let loginToken = await getToken(user_hard);
        let password = await getPassword(user_hard, loginToken.data.data.token);
        let loginReponse = await getJWT(user_hard, password.data.password, platform, deviceId);

    }
    const logout = () => (setUserData(undefined))

    return { userData, authenticate, logout }
}