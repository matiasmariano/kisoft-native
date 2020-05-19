import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from "../../../modules/home/components/Home";
import Login from "../../../modules/authentication/components/Login/Login";

const Drawer = createDrawerNavigator();

const hideElement = {
    drawerLabel: () => null,
    title: null,
    drawerIcon: () => null
}

const Aside = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Login" component={Login} options={hideElement} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Aside