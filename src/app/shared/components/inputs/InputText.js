import React from 'react'
import { Input } from 'react-native-elements';

const InputText = ({ containerStyle, onChangeText, placeholder, value }) => (
    <Input
        containerStyle={containerStyle}
        onChangeText={value => onChangeText(value)}
        placeholder={placeholder}
        value={value} />
)

export default InputText