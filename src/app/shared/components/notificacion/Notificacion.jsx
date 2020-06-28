import React from 'react'
import { Modal, StyleSheet, View, Text, Image } from 'react-native'
import ButtonK from '../inputs/ButtonK'

const Notificacion = ({message, type, visible, onClosed}) => {
    
    var iconComponent = null;

    switch (type) {
        case 'warn':
            iconComponent = <Image style={styles.modalIcon} source={require('../../../../assets/imagenes/warn.png')} />;
            break;
        case 'info':
            iconComponent = <Image style={styles.modalIcon} source={require('../../../../assets/imagenes/info.png')} />;
            break;
        default:
            iconComponent = <Image style={styles.modalIcon} source={require('../../../../assets/imagenes/info.png')} />;
            break;
    } 


    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            
            // onRequestClose={() => {
            //     alert("Modal has been closed.");
            // }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{alignItems: 'center'}}>
                        {iconComponent}
                        <Text style={styles.modalMessage}>{message}</Text>
                    </View>
                    <ButtonK style={styles.modalButtom} onPress={() => onClosed()} title={'Cerrar'} />
                </View>
            </View>
        </Modal>
    )
}

export default Notificacion;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end"

    },
    modalView: {
        
        justifyContent: "flex-end",

        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

        padding: 5,

        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 10
    },
    modalIcon:{
        height: 40,
        width: 40,
        marginTop: 10
    },
    modalMessage:{
        fontSize: 15,
        marginTop: 10,
        marginBottom: 20,

        fontWeight: '700',
        fontSize: 20
    },
    modalButtom:{
        backgroundColor: 'red'
    }

})