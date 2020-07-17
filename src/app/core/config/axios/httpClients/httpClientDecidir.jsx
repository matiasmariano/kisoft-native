import axios from 'axios'
import { successHandler, errorHandler } from '../axiosConfiguration'

const decidirKeyPublica = 'e9cdb99fff374b5f91da4480c8dca741'
const decidirKeyPribada = '92b71cf711ca41f78362a7134f87ff65'

const httpClientDecidir = axios.create({
    baseURL: 'https://developers.decidir.com/api/v2',
})

httpClientDecidir.interceptors.request.use(
    request => requestHandler(request)
)
httpClientDecidir.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

const requestHandler = (request) => {
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

export default httpClientDecidir