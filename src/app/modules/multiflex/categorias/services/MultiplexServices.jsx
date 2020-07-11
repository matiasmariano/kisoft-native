import Axios from 'axios';

export const getSorteos = async () => {
    return data;
}

export const getSorteoById = async (id) => {
    const result = data.find(x => x.id == id)
    if(result == null)
        throw 'todo mal papa.!!'

    return result;
}

export const suscribir = async (id) => {
    // throw 'todo mal'
    return {
        sucsess: true
    };
}


const data = [
    {
        id: 1,
        imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
        titulo: 'El balon',
        puntuacion: 3,
        descripcion: 'lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf',
        costo: 40000,
        ubicacion: 'Quilmes',
        cantidad_personas: 2,
        detallePremio: '1 (un) PAR de entradas para Rata Blanca ubicación Pullman Lateral, el 30 de Noviembre a las 21:00hs.'
    }, 
    {
        id: 2,
        imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
        titulo: 'El balonaso',
        puntuacion: 4,
        descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
        costo: 35000,
        ubicacion: 'Belgrano',
        cantidad_personas: 2,
        detallePremio: '1 (un) PAR de entradas para Rata Blanca ubicación Pullman Lateral, el 30 de Noviembre a las 21:00hs.'
    },
    {
        id: 3,
        imagen: 'https://gastronomiaycia.republica.com/wp-content/uploads/2017/10/mastergastronomiaesah2017-680x453.jpg',
        titulo: 'El balon',
        puntuacion: 3,
        descripcion: 'lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf lorem ipsum qwe asdf',
        costo: 40000,
        ubicacion: 'Quilmes',
        cantidad_personas: 2,
        detallePremio: '1 (un) PAR de entradas para Rata Blanca ubicación Pullman Lateral, el 30 de Noviembre a las 21:00hs.'
    }, 
    {
        id: 4,
        imagen: 'https://www.mexicodesconocido.com.mx/assets/images/destinos/teotihuacan/actividades/72_Teotihuacan_Escamoles4.jpg',
        titulo: 'El balonaso',
        puntuacion: 4,
        descripcion: 'eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa  eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa eaaaa',
        costo: 35000,
        ubicacion: 'Belgrano',
        cantidad_personas: 2,
        detallePremio: '1 (un) PAR de entradas para Rata Blanca ubicación Pullman Lateral, el 30 de Noviembre a las 21:00hs.'
    }
];

