import axios from 'axios'
import { requestHandler, successHandler, errorHandler } from '../axiosConfiguration'

const httpClientApi = axios.create({
    baseURL: '',
});

httpClientApi.interceptors.request.use(
    request => requestHandler(request)
)
httpClientApi.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

export default httpClientApi