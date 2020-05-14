import React from 'react';
import {Button as ButtonMaterial} from '@material-ui/core/Button';

const Button = ({ className, title, disabled, onClick }) => {

    return (
        <ButtonMaterial className={className} disabled={disabled} onClick={(event) => onClick(event)}>
            {title}
        </ButtonMaterial>
    )
}

export default Button