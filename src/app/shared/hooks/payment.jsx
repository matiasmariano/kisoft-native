import { useState, useEffect } from "react";
import Payment from '../services/Payment';

export const usePayment = () => {
    const [apiStatus, setApiStatus] = useState(undefined)

    const getApiStatus = async () => {
        let accountResponse = await Payment.get_api_status();
    }

    const processPayment = async () => {
        let preProcessResponse = await Payment.init_process_payment();
        //alert(preProcessResponse.data.id);
        
        let paymentResponse = await Payment.process_payment(preProcessResponse.data.id);
        //alert(JSON.stringify(paymentResponse));
    }

    return { apiStatus, setApiStatus, usePayment, getApiStatus, processPayment }
}