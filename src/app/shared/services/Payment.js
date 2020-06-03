import Axios from 'axios';

export default class Payment {
    static async get_api_status() {
        let result = Axios.get('https://developers.decidir.com/api/v1/healthcheck');
      return result;
    }
}