import Axios from 'axios';

export const get = async () => {
    return {
        data: {
            name: 'Nombre Ejemplo',
            pictures: [
                <Image source={{ uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/montadores-espectaculos.jpg?itok=Vq1KeYt4' }} style={styles.imagen} />,
                <Image source={{ uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/montadores-espectaculos.jpg?itok=Vq1KeYt4' }} style={styles.imagen} />,
                <Image source={{ uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/montadores-espectaculos.jpg?itok=Vq1KeYt4' }} style={styles.imagen} />,
                <Image source={{ uri: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/montadores-espectaculos.jpg?itok=Vq1KeYt4' }} style={styles.imagen} />
            ]
        }
    }
}