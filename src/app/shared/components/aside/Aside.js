import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Home from "../../../modules/home/components/Home";

const Drawer = createDrawerNavigator();

const Aside = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Aside;