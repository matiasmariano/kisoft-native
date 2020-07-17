import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwasome from 'react-native-vector-icons/FontAwesome5';
import ButtonK from '../inputs/ButtonK';
import CustomDrawer from './CustomDrawer';
import { navigationRef } from '../RootNavigation'

//Home
import Home from "../../../modules/home/home/components/Home";

//Experiencias...
import Categorias from "../../../modules/experiencias/categorias/components/Categorias";
import Categoria from "../../../modules/experiencias/categoria/components/Categoria";
import DetalleExperiencias from "../../../modules/experiencias/experiencia/components/DetalleExperiencias";
import Reserva from "../../../modules/experiencias/reserva/components/Reserva";

//Multiflex...
import Multiflex from "../../../modules/multiflex/categorias/components/Multiflex"
import DetalleSorteo from "../../../modules/multiflex/detalle/Components/DetalleSorteo"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreens(filterModalOpened, setFilterModalStatus) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={() => { return <Home filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
    </Stack.Navigator>
  );
}

function ExperienciasScreens(filterModalOpened, setFilterModalStatus) {
  return (
    <Stack.Navigator initialRouteName="Categorias">
      <Stack.Screen name="Categorias" component={({ navigation, route }) => { return <Categorias filterModalOpened={filterModalOpened} route={route} setFilterModalStatus={setFilterModalStatus} navigation={navigation} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
      <Stack.Screen name="Categoria" component={({ navigation, route }) => { return <Categoria filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} route={route} navigation={navigation} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
      <Stack.Screen name="DetalleExperiencias" component={() => { return <DetalleExperiencias filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
      <Stack.Screen name="Reserva" component={() => { return <Reserva filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
    </Stack.Navigator>
  );
}

function PuntosFlexScreens(filterModalOpened, setFilterModalStatus) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Multiflex" component={() => { return <Multiflex filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
      <Stack.Screen name="DetalleSorteo" component={() => { return <DetalleSorteo filterModalOpened={filterModalOpened} setFilterModalStatus={setFilterModalStatus} /> }} options={({ route, navigation }) => (options(navigation, route, filterModalOpened, setFilterModalStatus))} />
    </Stack.Navigator>
  );
}

const Aside = ({ logout }) => {

  const [filterModalOpened, setFilterModalStatus] = useState(false);

  return (
    <NavigationContainer theme={styles.theme} ref={navigationRef}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} logout={logout} />}>
        <Drawer.Screen name="Home" component={() => { return HomeScreens(filterModalOpened, setFilterModalStatus) }} />
        <Drawer.Screen name="Experiencias" component={() => { return ExperienciasScreens(filterModalOpened, setFilterModalStatus) }} />
        <Drawer.Screen name="MultiFlex" component={() => { return PuntosFlexScreens(filterModalOpened, setFilterModalStatus) }} />
        <Drawer.Screen name="Cerrar Sesion" component={() => { return <ButtonK onPress={logout()} /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Aside;

function options(navigation, route, filterModalOpened, setFilterModalStatus) {
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
        onPress={() => { setFilterModalStatus(!filterModalOpened) }}
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