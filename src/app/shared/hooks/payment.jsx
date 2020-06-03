import { useState, useEffect } from "react";
import Payment from '../services/Payment';

export const usePayment = () => {
    const [apiStatus, setApiStatus] = useState(undefined)

    const getApiStatus = async () => {
        let accountResponse = await Payment.get_api_status()
    }

    return { apiStatus, setApiStatus, usePayment, getApiStatus }
}