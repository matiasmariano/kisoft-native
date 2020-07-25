import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Map = ({ coordenadas }) => (
    <>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={coordenadas}>
            <Marker
                coordinate={coordenadas}
                title={''}
                description={''}
            />
        </MapView>
    </ >
)

export default Map;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    },
    map: {
        height: '90%',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius:10
    }
};