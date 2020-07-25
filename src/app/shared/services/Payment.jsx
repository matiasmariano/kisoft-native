import httpClientDecidir from '../../../app/core/config/axios/httpClients/httpClientDecidir'

export const getApiStatus = async () => {
  return httpClientDecidir.get('/healthcheck');
}

export const getToken = async () => {
  return httpClientDecidir.post('/tokens', JSON.stringify(parameter));
}

export const makePayment = async () => {
  return httpClientDecidir.post('/payments', JSON.stringify(parameter));
}