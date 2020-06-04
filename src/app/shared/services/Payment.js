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

    static async process_payment(token){
      //IMPORTANTE: El site_transaction_id tiene que ser UNICO, no puede haber 2 requests con el mismos.
      let body = {
        "site_transaction_id": "testttt22222",
        "token": token.toString(),
        "payment_method_id": 1,
        "bin": "450799",
        "amount": 2000,
        "currency": "ARS",
        "installments": 1,
        "description": "",
        "payment_type": "single",
        "sub_payments": []
      };
      //alert(JSON.stringify(body));
      return Axios.post('https://developers.decidir.com/api/v1/payments', JSON.stringify(body));
    }
}