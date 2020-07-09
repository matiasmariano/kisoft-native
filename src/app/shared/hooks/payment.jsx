import { useState, useEffect } from "react";
import Payment from '../services/Payment';

export const usePayment = () => {
    const [apiStatus, setApiStatus] = useState(undefined)

    const getApiStatus = async () => {
        let accountResponse = await Payment.getApiStatus();
        if (setApiStatus.okResponse)
            setApiStatus(accountResponse.response)
    }

    const processPayment = async (nroTarjeta, mesVencimiento, anioVencimiento, codSeguridad, nombre, nroDoc, monto) => {
        //Valida que el status este OK...
        getApiStatus()
        if (apiStatus) {
            let params = {
                "card_number": nroTarjeta,
                "card_expiration_month": mesVencimiento,
                "card_expiration_year": anioVencimiento,
                "security_code": codSeguridad,
                "card_holder_name": nombre,
                "card_holder_identification": {
                    "type": "dni",
                    "number": nroDoc
                }
            };
            let tokenResult = await Payment.getToken(params)

            let payParams = {
                "site_transaction_id": "[ID DE LA TRANSACCIÓN]",
                "token": tokenResult.token,
                "payment_method_id": 1,
                "bin": nroTarjeta.substr(0, 6),
                "amount": monto,
                "currency": "ARS",
                "installments": 1, //El id debe coincidir con el medio de pago de tarjeta ingresada.Se valida que sean los primeros 6 digitos de la tarjeta ingresada al generar el token.
                "description": "",
                "payment_type": "single",
                "sub_payments": []
            }
            let tokenResult = await Payment.processPayment(payParams)

            return result
        } else {
            window.alert('No se pudo procesar su pago, intente mas tarde.')
        }
    }

    return { processPayment }
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