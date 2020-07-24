export const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        request.headers['Content-Type'] = 'application/json';
    }
    return request
}

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

export const successHandler = (response) => {
    return { data: response, okResponse: true };
}

export const errorHandler = (error) => {
    console.log(JSON.stringify(error));
    
    return { error: error, okResponse: false }
}