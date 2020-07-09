import Axios from 'axios';

export const getApiStatus = async () => {
  return Axios.get('https://developers.decidir.com/api/v2/healthcheck');
}

export const getToken = async () => {
  return Axios.post('https://developers.decidir.com/api/v2/tokens', JSON.stringify(parameter));
}

export const makePayment = async () => {
  return Axios.post('https://developers.decidir.com/api/v2/payments', JSON.stringify(parameter));
}