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
import Categoria from "../../../modules/categoria/components/Categoria";

import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreens() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={({ route, navigation }) => ( options(navigation, route) )} />
      <Stack.Screen name="Gastronomia" component={Categoria} options={({ route, navigation }) => ( options(navigation, route) )} />
    </Stack.Navigator>
  );
}

function CobroScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cobro" component={Cobro} options={({ route, navigation }) => ( options(navigation, route) )} />
    </Stack.Navigator>
  );
}

const Aside = ({ logout }) => (
  <NavigationContainer theme={styles.theme}>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} logout={logout}/>}>
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="Cerrar Sesion" component={() => { return <ButtonK onPress={logout()} /> }} />
      <Drawer.Screen name="Cobro" component={CobroScreens} />
    </Drawer.Navigator>
  </NavigationContainer>
)

export default Aside;

function options(navigation, route){
  return ({
    headerTitle: '',
    headerStyle: { backgroundColor: 'rgb(227, 0, 27)' },
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
          <View>
            <Text>
              <AntDesign
                name="left"
                size={25}
                color="#ffffff"
                style={{
                  marginLeft: 15
                }}
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.featureName}>{`   ${route.name}`}</Text>
            </Text>
          </View>
        )
  })
}

const styles = {
  theme:{
    colors: {
      primary: 'red',
      card: 'rgb(76, 76, 77)',
    }
  },
  featureName:{
    color: 'white',
    fontSize: 25
  }
}