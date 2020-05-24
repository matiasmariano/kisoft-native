import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import ButtonK from '../inputs/ButtonK';

import Home from "../../../modules/home/components/Home";
import Login from "../../../modules/authentication/components/Login/Login";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Aside = ({ logout }) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Logout" component={() => { return <ButtonK onPress={logout()} /> }} />
        </Drawer.Navigator>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Aside;