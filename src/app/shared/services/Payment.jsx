import Axios from 'axios';

export default class Payment {
  static async getApiStatus() {
    return Axios.get('https://developers.decidir.com/api/v1/healthcheck');
  }

  static async getToken(parameter) {
    return Axios.post('https://developers.decidir.com/api/v1/tokens', JSON.stringify(parameter));
  }

  static async processPayment(parameter) {
    return Axios.post('https://developers.decidir.com/api/v1/payments', JSON.stringify(parameter));
  }
}