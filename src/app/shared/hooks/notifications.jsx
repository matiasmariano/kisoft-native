import { useState, useEffect } from "react"
import { Platform } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'

export const useNotifications = () => {
    const [token, setToken] = useState(undefined)

    const getToken = async () => {
        if (Constants.isDevice) {
            //trae permiso de notificacion...
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
            let finalStatus = existingStatus

            //Si no tiene permisos, los solicita...
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
                finalStatus = status
            }

            if (finalStatus !== 'granted') {
                alert('Las notificaciones estan desactivadas.')
                return
            }

            setToken(await Notifications.getExpoPushTokenAsync())
            console.log("MATIAS " + token)
        } else {
            alert('Las notificaciones solo pueden ser recibidas en un celular.')
        }

        if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
                name: 'default',
                sound: true,
                priority: 'max',
                vibrate: [0, 250, 250, 250],
            })
        }
    }

    return { token, getToken }
}

