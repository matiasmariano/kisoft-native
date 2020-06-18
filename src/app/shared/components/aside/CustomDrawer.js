import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { Divider } from 'react-native-elements';

class CustomDrawer extends Component {
    constructor(props){
        super(props);
        this.state = {activeItemKey: 'Home'};
    }

    render(){
    
        const { navigation } = this.props;

        return (
            <View>
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
                        <Text style={[styles.screenTextStyle, this.state.activeItemKey =='Cobro' ? styles.selectedTextStyle : null]} onPress={() => {
                            this.setState({activeItemKey: 'Cobro'});
                            navigation.navigate('Cobro');
                        }}>Cobro</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View>
                        <Text style={styles.screenTextStyle} onPress={() => this.props.logout()}>Cerrar Sesion</Text>
                    </View>
                </View>
            </View>
        );
    }
};

export default CustomDrawer;

const styles = {
    screenContainer: { 
        paddingTop: 50,
        width: '100%',
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
    }
};