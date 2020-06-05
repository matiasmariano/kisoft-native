import Axios from 'axios';

Axios.interceptors.request.use(
    request => requestHandler(request)
)

Axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        if (request.url.includes('decidir')) {
            request.headers['Content-Type'] = 'application/json';
            request.headers['apikey'] = 'e9cdb99fff374b5f91da4480c8dca741';
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
