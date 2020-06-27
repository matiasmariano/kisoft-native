import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class CustomDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {activeItemKey: 'Home'};
    }

    render(){
    
        const { navigation } = this.props;

        return (
            <View style={styles.screenContainer}>
                <View>
                    <Text style={styles.name}>My Name</Text>
                    <Text style={styles.email}>MyEmail@hotmail.com</Text>
                </View>
                <Divider style={styles.divider} />
                <View style={[styles.screenStyle, this.state.activeItemKey =='Home' ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, this.state.activeItemKey =='Home' ? styles.selectedTextStyle : null]} 
                    onPress={() => {
                        this.setState({activeItemKey: 'Home'});
                        navigation.navigate('Home');
                    }}>Home</Text>
                </View>
                <View style={[styles.screenStyle, this.state.activeItemKey =='Cobro' ? styles.activeBackgroundColor : null]}>
                    <Text 
                        style={[styles.screenTextStyle, this.state.activeItemKey =='Cobro' ? styles.selectedTextStyle : null]}
                        onPress={() => { this.setState({activeItemKey: 'Cobro'}); navigation.navigate('Cobro');}}
                        >
                        Cobro
                    </Text>
                </View>
                <View style={[styles.screenStyle, this.state.activeItemKey =='MultiFlex' ? styles.activeBackgroundColor : null]}>
                    <Text 
                        style={[ styles.screenTextStyle, this.state.activeItemKey == 'MultiFlex'? styles.selectedTextStyle: null ]}
                        onPress={() => { this.setState({activeItemKey: 'MultiFlex'}); navigation.navigate('MultiFlex');}}>
                        MultiFlex
                    </Text>
                </View>
                <Divider style={styles.bottomDivider} />
                <View style={styles.cerrarSesion}>
                    <Text style={[styles.screenTextStyle]}>
                        <Icon name="ios-log-out" size={15} color="white"/>   
                        <Text onPress={() => this.props.logout()}>{'   '}Cerrar Sesion</Text>
                    </Text>
                </View>
            </View>
        );
    }
};

export default CustomDrawer;

const styles = {
    screenContainer: { 
        paddingTop: 80,
        width: '100%',
        flex: 1
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: 47
    },
    screenTextStyle:{
        fontSize: 15,
        color: 'white',
        marginLeft: 24,
        height: 22
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    activeBackgroundColor: {
        backgroundColor: '#EF384D',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    divider:{
        backgroundColor: 'white',
        width: '60%',
        marginLeft: 24,
        marginBottom: 39,
        marginTop: 39,
    },
    bottomDivider: {
        backgroundColor: 'white',
        width: '60%',
        marginLeft: 24,
        marginBottom: 39,
        marginTop: 39,
        position: 'absolute',
        bottom: 70
    },
    name:{
        fontWeight: 'normal',
        fontSize: 22,
        lineHeight: 30,
        marginLeft: 24,
        color: 'white'
    },
    email: {
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 21,
        marginLeft: 24,
        color: 'white'
    },
    cerrarSesion: {
        position: 'absolute',
        bottom: 45
    }
};