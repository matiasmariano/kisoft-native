import httpClientApi from '../../../app/core/config/axios/httpClients/httpClientApi'

export const getToken = async (user) => {
    return httpClientApi.get(`/getCodeTMP?email=${user}`);
}

export const validateToken = async (token) => {
    return httpClientApi.get(`/validate_token?token=${token}`);
}

export const getPassword = async (user, loginToken) => {
    return httpClientApi.post(`/getPass?email=${user}&token=${loginToken}`)
}

export const getJWT = async (user, password, plataforma, deviceId) => {
    return httpClientApi.post(`/login?email=${user}&password=${password}&platform=${plataforma}&device_id=${deviceId}`)
}