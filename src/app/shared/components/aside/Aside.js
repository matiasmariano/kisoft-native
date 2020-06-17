import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ButtonK from '../inputs/ButtonK';

import Home from "../../../modules/home/components/Home";
import Login from "../../../modules/authentication/components/Login/Login";
import Cobro from "../../../modules/cobro/components/Cobro";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={options} />
    </Stack.Navigator>
  );
}

const Aside = ({ logout }) => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="Logout" component={() => { return <ButtonK onPress={logout()} /> }} />
      <Drawer.Screen name="Cobro" component={Cobro} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default Aside;

const options = ({ navigation, route }) => ({
  headerTitle: '',
  headerStyle: { backgroundColor: 'rgb(227, 0, 27)' },
  headerLeft: () =>
    1 == 1 ?
      (
        <Icon
          name="ios-menu"
          size={40}
          color="#ffffff"
          style={{
            marginLeft: 20
          }}
          onPress={() => navigation.openDrawer()}
        />
      )
      :
      (
        <AntDesign
          name="left"
          size={30}
          color="#ffffff"
          style={{
            marginLeft: 15
          }}
          onPress={() => navigation.navigate('NOMBRE_PANTALLA_VER_COMO_PASAR_POR_PARAMETRO')}
        />
      )
})