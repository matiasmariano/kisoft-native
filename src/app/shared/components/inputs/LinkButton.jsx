import React from 'react'
import { Text } from 'react-native';

const LinkButton = ({ onPress, title, fontSize }) => (
    <Text style={{ color: 'blue', fontSize: { fontSize } }}
        onPress={value => onPress(value)}>
        {title}
    </Text >
)

export default LinkButton