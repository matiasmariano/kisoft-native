import React from "react";
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { View, Text } from "react-native";
import { headerStyle } from '../../../../assets/style/HeaderStyle';
import ButtonK from '../../components/inputs/ButtonK';
import { buttonStyle } from '../../../../assets/style/ButtonStyle';

const Header = ({ navigation }) => {
    const isDrawerOpen = useIsDrawerOpen();

    return (
        <View style={headerStyle.barraSuperior}>
            <ButtonK
                onPress={navigation.openDrawer}
                title="Abrir"
                style={buttonStyle.header} />
        </View>
    )
}

export default Header