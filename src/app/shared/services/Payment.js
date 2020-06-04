import Axios from 'axios';

export default class Payment {
    static async get_api_status() {
      return Axios.get('https://developers.decidir.com/api/v1/healthcheck');
    }

    static async init_process_payment() {

      let body = {
        "card_number": "4507990000004905",
        "card_expiration_month": "08",
        "card_expiration_year": "20",
        "security_code": "123",
        "card_holder_name": "John Doe",
        "card_holder_identification": {
          "type": "dni",
          "number": "25123456"
        }
      };

      return Axios.post('https://developers.decidir.com/api/v1/tokens', JSON.stringify(body));
    }
}