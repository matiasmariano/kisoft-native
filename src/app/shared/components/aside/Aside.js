import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from "../../../modules/home/components/Home";
import {connect} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const Aside = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
)

const mapStateToProps = state => {
    return {
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Aside);