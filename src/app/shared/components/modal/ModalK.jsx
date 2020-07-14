import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

const ModalK = ({ isModalVisible, componente, onSwipeComplete }) => (
    <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        onSwipeComplete={(value) => onSwipeComplete(false)}
        style={styles.modal}>
        <View style={{ flex: 1, }}>
            {componente}
            <Text
                style={styles.text}
                onPress={() => onSwipeComplete(false)}>Cerrar</Text>
        </View>
    </Modal>
);

export default ModalK;

const styles = {
    modal: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        maxHeight: 600,
        borderRadius: 15,
        marginTop: '25%'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    }
}