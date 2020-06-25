import Axios from 'axios';

export const get = async (categoriaId) => {
    return {
        data: [{
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja',
            costo: 40000,
            ubicacion: 'Quilmes papi',
            cantidad_personas: 2
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'A la vuelta de la ezquina',
            cantidad_personas: 2
        },
        {
            imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
            titulo: 'El balon',
            puntuacion: 3,
            descripcion: 'lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja lorem ipsum tu vieja',
            costo: 40000,
            ubicacion: 'Quilmes papi',
            cantidad_personas: 2
        }, {
            imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
            titulo: 'El balonaso',
            puntuacion: 4,
            descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
            costo: 35000,
            ubicacion: 'A la vuelta de la ezquina',
            cantidad_personas: 2
        }]
    }
}