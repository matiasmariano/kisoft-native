import httpClientApi from '../../../../core/config/axios/httpClients/httpClientApi'

export const get = async (experienciaId) => {
    return {
        data: {
            nombre: 'Nombre Ejemplo',
            imagenes: [
                'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
                'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
                'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
                'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg'
            ],
            costo: 10000,
            cantidadPersonas: 2,
            horario: 'Todos los días de 7:30 a 11:30hs y de 16:00 a 19:00hs',
            descripcion: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
            puntuacion: 4,
            ubicacion: 'Tucumán, San Miguel de Tucumán 25 de Mayo 695'
        }
    }
}