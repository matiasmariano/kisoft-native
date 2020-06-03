import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePayment } from '../../../shared/hooks/payment';

const Cobro = () => {
    const { apiStatus, setApiStatus, getApiStatus } = usePayment();
    getApiStatus();

    return (
        <View>
            <View>
                <Text>Cobro</Text>
            </View>
        </View >
    )
}

export default Cobro;