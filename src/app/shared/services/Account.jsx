import httpClientApi from '../../../app/core/config/axios/httpClients/httpClientApi'

export const login = async (user, pass) => {
    return httpClientApi.post(`/login?email=${user}&password=${pass}`)
}