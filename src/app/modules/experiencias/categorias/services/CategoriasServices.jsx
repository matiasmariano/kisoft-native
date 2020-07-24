import httpClientApi from '../../../../core/config/axios/httpClients/httpClientApi'

export const get = async (token) => {
    return httpClientApi.get(`/categories?token=${token}`);
}

export const getCatalogByCategoryId = async (categoriaId, token, page, perPage) => {
    return httpClientApi.get(`/category/${categoriaId}?page=${page}&perPage=${perPage}&token=${token}`);
}