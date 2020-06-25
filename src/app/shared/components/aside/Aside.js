import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwasome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { navigationRef } from '../RootNavigation'

import ButtonK from '../inputs/ButtonK';

import Home from "../../../modules/home/components/Home";
import Login from "../../../modules/authentication/components/Login/Login";
import Cobro from "../../../modules/cobro/components/Cobro";
import Categoria from "../../../modules/categoria/components/Categoria";
import ListadoFlex from '../../../modules/ListadoFlex/components/ListadoFlex';
import DetalleNovedad from '../../../modules/ListadoFlex/components/DetalleNovedad'

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreens() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={({ route, navigation }) => (options(navigation, route))} />
      <Stack.Screen name="Categoria" component={Categoria} options={({ route, navigation }) => (options(navigation, route))} />
    </Stack.Navigator>
  );
}

function CobroScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cobro" component={Cobro} options={({ route, navigation }) => (options(navigation, route))} />
    </Stack.Navigator>
  );
}

function ListadoFlexScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListadoFlex" component={ListadoFlex} options={({ route, navigation }) => (options(navigation, route))} />
      <Stack.Screen name="DetalleNovedad" component={DetalleNovedad} options={({ route, navigation }) => (options(navigation, route))} />
    </Stack.Navigator>
  );
}

const Aside = ({ logout }) => (
  <NavigationContainer theme={styles.theme} ref={navigationRef}>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} logout={logout} />}>
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="ListadoFlex" component={ListadoFlexScreens} />
      <Drawer.Screen name="Cerrar Sesion" component={() => { return <ButtonK onPress={logout()} /> }} />
      <Drawer.Screen name="Cobro" component={CobroScreens} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default Aside;

function options(navigation, route) {
  return ({
    headerTitle: route.params ? route.params.title : '',
    headerStyle: { backgroundColor: 'rgb(227, 0, 27)', color: 'red', shadowColor: 'transparent', aligneSelf: 'center' },
    headerTitleStyle: {
      color: '#ffffff',
      fontSize: 30,
      fontWeight: '400'
    },
    headerRight: () => (
      <IconAwasome
        name="filter"
        size={25}
        color="#ffffff"
        style={{
          marginRight: 20
        }}
        onPress={() => { }}
      />
    ),
    headerLeft: () =>
      route.name == 'Home' ?
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
          <IconAwasome
            name="arrow-circle-left"
            size={35}
            color="#ffffff"
            style={{
              marginLeft: 20
            }}
            onPress={() => navigation.goBack()}
          />
        )
  })
}

const styles = {
  theme: {
    colors: {
      primary: 'red',
      card: 'rgb(76, 76, 77)',
    }
  },
  featureName: {
    color: 'white',
    fontSize: 25
  }
}