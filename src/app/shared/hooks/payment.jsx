import { useState, useEffect } from "react";
import { getApiStatus, getToken, makePayment } from '../services/Payment';

export const usePayment = () => {
    const [statusPayment, setStatusPayment] = useState(undefined)

    const processPayment = async (nroTarjeta, mesVencimiento, anioVencimiento, codSeguridad, nombre, nroDoc, monto) => {
        let apiStatusResponse = await getApiStatus();

        //Valida que el status este OK...
        if (apiStatusResponse.okResponse) {
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

            let tokenResponese = await getToken(params)

            if (tokenResponese.response.status == 'active') {


                let payParams = {
                    "site_transaction_id": "[ID DE LA TRANSACCIÓN]",
                    "token": tokenResponese.response.id,
                    "payment_method_id": 1,
                    "bin": nroTarjeta.substr(0, 6),
                    "amount": monto,
                    "currency": "ARS",
                    "installments": 1, //El id debe coincidir con el medio de pago de tarjeta ingresada.Se valida que sean los primeros 6 digitos de la tarjeta ingresada al generar el token.
                    "description": "Compra de puntos Flex",
                    "payment_type": "single",
                    "sub_payments": []
                }
                let paymentResponse = await makePayment(payParams)

                if(paymentResponse.okResponse && paymentResponse.response.status === 'approved'){
                    setStatusPayment(paymentResponse.response)
                }else{
                    failPrecess('No se pudo procesar su pago, intente mas tarde.')
                }
            }
            else {
                failPrecess('No se pudo procesar su pago, la tarjeta se encuentra inactiva.')
            }
        } else {
            failPrecess('No se pudo procesar su pago, intente mas tarde.')
        }

        const failPrecess = (message) => {
            window.alert(message)
            setStatusPayment(undefined)
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

//DOCUMENTACION: https://decidirv2.api-docs.io/1.0/transacciones-simples/solicitud-de-token-de-pago-1