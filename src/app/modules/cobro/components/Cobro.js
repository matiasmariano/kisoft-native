import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePayment } from '../../../shared/hooks/payment';

const Cobro = () => {
    const { apiStatus, getApiStatus, processPayment } = usePayment();
   
    getApiStatus();
    
    let body = {
        "card_number": "4507990000004905",
        "card_expiration_month": "08",
        "card_expiration_year": "20",
        "security_code": "123",
        "card_holder_name": "John Doe",
        "card_holder_identification": {
          "type": "dni",
          "number": "25123456"
        }
      };
    processPayment(body);

    return (
        <View>
            <View>
                <Text>Cobro</Text>
            </View>
        </View >
    )
}

export default Cobro;