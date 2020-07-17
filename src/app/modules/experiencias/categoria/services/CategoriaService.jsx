import httpClientApi from '../../../../core/config/axios/httpClients/httpClientApi'

export const get = async (categoriaId) => {
    return {
        data: [{
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf',
            costo: 40000,
            ubicacion: 'Quilmes',
            cantidad_personas: 2,
            cost: 10000
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'Belgrano',
            cantidad_personas: 2,
            cost: 20000
        },
        {
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf lorem ipsum les asdf',
            costo: 40000,
            ubicacion: 'Palermo',
            cantidad_personas: 2,
            cost: 25000
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'Belgrano',
            cantidad_personas: 2,
            cost: 10000
        }]
    }
}