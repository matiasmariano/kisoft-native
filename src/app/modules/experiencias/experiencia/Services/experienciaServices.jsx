import httpClientApi from '../../../../core/config/axios/httpClients/httpClientApi'

export const get = async (experienciaId, token) => {
    return httpClientApi.get(`/service/${experienciaId}?token=${token}`);
}