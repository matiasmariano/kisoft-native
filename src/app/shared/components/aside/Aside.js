import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import ButtonK from '../inputs/ButtonK';

import Home from "../../../modules/home/components/Home";

const Drawer = createDrawerNavigator();

const Aside = ({logout}) => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Logout" component={()=>{ return <ButtonK onPress={logout()}/> }}/>
        </Drawer.Navigator>
    </NavigationContainer>
)

export default Aside;