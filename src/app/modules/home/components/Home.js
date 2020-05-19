import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';

export default ({ navigation }) => {
    return (
        <View>
            <Text>Kisoft</Text>
            <Button
                onPress={() => navigation.navigate("Login")}
                title={`Volver`} />

            <Button
                onPress={() => navigation.openDrawer()}
                title={`Abrir menu`} />
        </View>
    );
};