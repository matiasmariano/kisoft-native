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