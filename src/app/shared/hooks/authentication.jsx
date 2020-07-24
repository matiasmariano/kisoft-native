import { useState, useEffect } from "react"
import { getToken, getPassword, getJWT } from '../services/Account';

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)

    const authenticate = async (user) => {
        let user_hard = 'usuario_1@valijachica.com.ar';
        let platform = 'ios';
        let deviceId = '123';
 
        let loginToken = await getToken(user_hard);
        let password = await getPassword(user_hard, loginToken.data.data.token);
        let loginReponse = await getJWT(user_hard, password.data.data.password, platform, deviceId);
        //alert(`token JWT: ${JSON.stringify(loginReponse.data.data.token)}`)
    }
    const logout = () => (setUserData(undefined))

    return { userData, authenticate, logout }
}


/*


await getToken(user_hard).then(loginToken => {
            alert(loginToken.data.data.token);
            await getPassword(user_hard, loginToken.data.data.token).then(password => {
                alert(password.data.password);
                await getJWT(user_hard, password.data.password, platform, deviceId).then(loginResponse => {
                    alert('asd');
                });
            });
        });

        */