import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from "./app/modules/authentication/components/Login/Login";
import Home from "./app/modules/home/components/Home";

const RootStack = createSwitchNavigator(
    {
        Login: Login,
        Home: Home
    }
)

const AppNavigator = createAppContainer(RootStack);
export default AppNavigator;