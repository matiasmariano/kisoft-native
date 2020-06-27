import { useState, useEffect } from "react";
import Payment from '../services/Payment';

export const usePayment = () => {
    const [apiStatus, setApiStatus] = useState(undefined)

    const getApiStatus = async () => {
        let accountResponse = await Payment.get_api_status();
        if (setApiStatus.okResponse)
            setApiStatus(accountResponse.response)
    }

    const processPayment = async (params) => {
        let result = await Payment.init_process_payment(params);
        return result
    }

    return { apiStatus, getApiStatus, processPayment }
}

/*
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
*/