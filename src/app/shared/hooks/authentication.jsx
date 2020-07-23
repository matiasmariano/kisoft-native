import { useState, useEffect } from "react"
import { login } from '../services/Account';

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)

    const authenticate = async (user, pass) => {
        let loginResponse = await login(user, pass)
        if (loginResponse.data)
            setUserData({ usuario: 'pepe' });
        //setUserData(loginResponse.data);
    }
    const logout = () => (setUserData(undefined))

    return { userData, authenticate, logout }
}