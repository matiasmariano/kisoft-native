import { useState, useEffect } from "react"
import Account from '../services/Account'

export const useAuthentication = () => {
    const [userData, setUserData] = useState(undefined)

    const authenticate = async (user, pass) => {
        /*let accountResponse = await Account.login({ user: user, pass: pass })
        if (accountResponse.data) {
            setUserData(true)
        }*/
        let mock = {value: 'asd'};
        setUserData(mock);
    }

    const logout = () => (setUserData(undefined))

    return { userData, authenticate }
}