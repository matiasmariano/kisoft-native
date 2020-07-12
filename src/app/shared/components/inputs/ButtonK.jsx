import React from 'react'
import { Button } from 'react-native-elements'

const ButtonK = ({ style, titleStyle, onPress, title, containerStyle, disabled, disabledStyle }) => (
    <Button
        containerStyle={containerStyle}
        buttonStyle={style}
        titleStyle={titleStyle}
        onPress={value => onPress(value)}
        title={title}
        disabled={disabled}
        disabledStyle={disabledStyle} />
)

export default ButtonK