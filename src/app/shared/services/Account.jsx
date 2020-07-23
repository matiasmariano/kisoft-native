import httpClientDecidir from '../../../app/core/config/axios/httpClients/httpClientDecidir'
import httpClientApi from '../../../app/core/config/axios/httpClients/httpClientApi'

export const login = async () => {
    let user = 'usuario_1@valijachica.com.ar';
    let password = '132456';
    return httpClientApi.post(`login?email=${user}&password=${password}`);
    /*data: {
        token: '1231rjno1h41uob3bgv14gv1ug4uo124uo1v4uo14v1o4v1'
    }*/
}