import Axios from 'axios';
import { toast } from 'react-toastify';

Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
const public_key = 'e9cdb99fff374b5f91da4480c8dca741';
const private_key = '92b71cf711ca41f78362a7134f87ff65';

Axios.interceptors.request.use(
    request => requestHandler(request)
)

Axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

const requestHandler = (request) => {
    //TODO: Importante, mejorar esta parte. Algunos request necesitan el public_key y otros el private_key
    if (isHandlerEnabled(request)) {
        if (request.url.includes('decidir') && !request.url.includes('payments')){
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = public_key;
            request.headers['Cache-Control'] = 'no-cache';
        }else if (request.url.includes('decidir') && request.url.includes('payments')){
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = private_key;
            request.headers['Cache-Control'] = 'no-cache';
        }
    }
    return request
}

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

//Interceptor de responce ERROR.
const errorHandler = (error) => {
    let errorMessage = 'Error de conexion';

    if (error.response) {
        switch (error.response.status.toString()) {
            default: {
                errorMessage = 'Se produjo un error';
                break
            }
        }
    }
    //alert(`response: ${JSON.stringify(error.response)}`);
    return {
        error: {
            code: error.response.status.toString(), errorMessage: errorMessage
        },
        data: undefined
    }
}

//Interceptor de responce OK.
const successHandler = (response) => {
    //alert(`response: ${JSON.stringify(response.data)}`);
    return response;
}
