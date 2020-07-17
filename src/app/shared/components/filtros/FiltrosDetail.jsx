import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const FiltrosDetail = ({ handlerUpdate }) => {
    const [parametrosFiltro, setParametrosFiltro] = useState({

    })

    const onUpdate = () => {
        //go API...
        handlerUpdate({})
    }

    return (null)
}

export default FiltrosDetail