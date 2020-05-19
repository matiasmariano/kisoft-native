import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import { logout } from '../../authentication/actions/Actions';
import {connect} from 'react-redux';

const Home = (props) => {
    return (
        <View>
            <Text>KiSoft</Text>
            <Button
                onPress={() => props.logout()}
                title={`Volver`} />

            <Button
                onPress={() => props.navigation.openDrawer()}
                title={`Abrir menu`} />
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