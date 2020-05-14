import React from 'react'
import {TextField as TextFieldMaterial} from '@material-ui/core/TextField'

const TextField = ({ multiline, title, value, onChange, error, disabled, type, maxLength }) => {
    return (
        <TextFieldMaterial
            id={'input' + title.trim()}
            rowsMax={8}
            multiline={multiline}
            label={title}
            type={type}
            value={value}
            error={error}
            className="total-width"
            onChange={(v, index) => { onChange(v, index) }}
            margin="normal"
            disabled={disabled}
            inputProps={{ maxLength: maxLength || 250 }}
        />
    )
}

export default TextField