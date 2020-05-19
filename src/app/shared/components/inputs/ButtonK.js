import React from 'react'
import { Button } from 'react-native-elements'

const ButtonK = ({ style, titleStyle, onPress, title }) => (
    <Button
        buttonStyle={style}
        titleStyle={titleStyle}
        onPress={value => onPress(value)}
        title={title} />
)

export default ButtonK