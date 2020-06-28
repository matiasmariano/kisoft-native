import Axios from 'axios';

export default class Payment {
  static async get_api_status() {
    return Axios.get('https://developers.decidir.com/api/v1/healthcheck');
  }

  static async init_process_payment(parameter) {
    return Axios.post('https://developers.decidir.com/api/v1/tokens', JSON.stringify(parameter));
  }
}