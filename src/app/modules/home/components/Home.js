import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { logout } from '../../authentication/actions/Actions';
import {connect} from 'react-redux';

const Home = (props) => {

    let categorias = [{

    }]

    return (
        <View style={styles.barraSuperior}>

            <Text style={styles.title}>Categorias</Text>

            {/*<Text>KiSoft</Text>
            <Button
                onPress={() => props.logout()}
                title={`Volver`} />

            <Button
                onPress={() => props.navigation.openDrawer()}
            title={`Abrir menu`} />*/}

        </View>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.login.loggedIn
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Home);


  const styles = {
    title: {
        position: 'absolute',
        marginTop: '30%',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 34,
        lineHeight: 46,
        marginLeft: 28
    },
    barraSuperior: {
        backgroundColor: 'rgb(227, 0, 27)',
        height: '10%'
    }
  }