import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ModalK from '../modal/ModalK';
import FiltrosDetail from './FiltrosDetail'

const Filtros = ({ isModalVisible, setIsModalVisible, handlerUpdate, customStyle }) => (
    <ModalK isModalVisible={isModalVisible}
        componente={
            <FiltrosDetail handlerUpdate={handlerUpdate} setIsModalVisible={setIsModalVisible} />
        }
        onSwipeComplete={() => { setIsModalVisible(false) }}
        customStyle={customStyle} />
)

export default Filtros;