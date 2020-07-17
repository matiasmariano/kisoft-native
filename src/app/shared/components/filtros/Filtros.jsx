import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ModalK from '../modal/ModalK';

class Filtros extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        return (
            <View>
                <ModalK isModalVisible={this.props.isModalVisible}
                componente={<View />}
                onSwipeComplete={() => { this.props.setIsModalVisible(false) }} />
            </View>
        );
    }
};

export default Filtros;