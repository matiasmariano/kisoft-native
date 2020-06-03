import Axios from 'axios';
//import { LocalStorageHelper } from '../../shared/helpers/LocalStorageHelper';
//import { store } from '../../Store';
import { toast } from 'react-toastify';

//const localStorageHelper = new LocalStorageHelper();
//const { dispatch } = store;
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
    //dispatch({ type: "LOADING_ON" });
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
    //dispatch({ type: "LOADING_OFF" });
    let errorMessage = 'Error de conexion';
    /*if (error.response.status === 401) {    //Si es 401, elimina la data del usuario.
        localStorageHelper.setItem('userToken', null);
        localStorageHelper.setItem('userRols', null);
    }*/

    if (error.response) {
        switch (error.response.status.toString()) {
            default: {
                errorMessage = 'Se produjo un error';
                break
            }
        }
    }

    return {
        error: {
            code: error.response.status.toString(), errorMessage: errorMessage
        },
        data: undefined
    }
}

//Interceptor de responce OK.
const successHandler = (response) => {
    //dispatch({ type: "LOADING_OFF" });
    alert(`response: ${JSON.stringify(response.data)}`);
    return {
        data: response.data, error: undefined
    }
}
