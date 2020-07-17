import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ModalK from '../modal/ModalK';
import FiltrosDetail from './FiltrosDetail'

const Filtros = ({ isModalVisible, setIsModalVisible, handlerUpdate }) => (
    <View>
        <ModalK isModalVisible={isModalVisible}
            componente={
                <FiltrosDetail handlerUpdate={handlerUpdate} />
            }
            onSwipeComplete={() => { setIsModalVisible(false) }} />
    </View>
)

export default Filtros;