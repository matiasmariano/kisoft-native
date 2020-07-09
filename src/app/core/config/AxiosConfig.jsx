import Axios from 'axios';

const decidirKeyPublica = 'e9cdb99fff374b5f91da4480c8dca741'
const decidirKeyPribada = '92b71cf711ca41f78362a7134f87ff65'

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
        if (request.url.includes('decidir')) {
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = decidirKeyPublica
            request.headers['Cache-Control'] = 'no-cache';
        } else if (request.url.includes('decidir') && request.url.includes('payments')) {
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = decidirKeyPribada
            request.headers['Cache-Control'] = 'no-cache';
        }
    }
    return request
}

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const errorHandler = (error) => {
    return { error: error, okResponse: false }
}

//Interceptor de responce OK.
const successHandler = (response) => {
    return { response: response, okResponse: true };
}
