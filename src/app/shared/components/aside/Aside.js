import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import ButtonK from '../inputs/ButtonK';

import Home from "../../../modules/home/components/Home";
import Login from "../../../modules/authentication/components/Login/Login";
import Cobro from "../../../modules/cobro/components/Cobro";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreens() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerTitle: '', headerStyle:{backgroundColor: 'rgb(227, 0, 27)'}}}/>
      </Stack.Navigator>
    );
}  

const Aside = ({ logout }) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreens} />
            <Drawer.Screen name="Logout" component={() => { return <ButtonK onPress={logout()} /> }} />
            <Drawer.Screen name="Cobro" component={Cobro} />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Aside;