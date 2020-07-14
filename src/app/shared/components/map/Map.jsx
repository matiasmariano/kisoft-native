import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ButtonK from '../inputs/ButtonK';
import Modal from 'react-native-modal';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Map = ({ coordenadas, isModalVisible, onBackButtonPress }) => {
    return (
        <View style={styles.body}>
            <Modal isVisible={isModalVisible}
                backdropOpacity={0.5}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
                onBackButtonPress={()=>{onBackButtonPress()}}
                onBackdropPress={()=>{onBackButtonPress()}}>
                    <View style={{ flex: 1 }}>
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
                    </View>
            </Modal>
        </View >
    );
};

export default Map;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    },
    map: {
        height: '60%',
        width: '100%',
        marginTop: '25%'
    }
};