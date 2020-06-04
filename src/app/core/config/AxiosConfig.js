import Axios from 'axios';
import { toast } from 'react-toastify';

Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
const public_key = 'e9cdb99fff374b5f91da4480c8dca741';

Axios.interceptors.request.use(
    request => requestHandler(request)
)

Axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        if (request.url.includes('decidir')){
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = public_key;
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
    //alert(`response: ${JSON.stringify(error)}`);
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
