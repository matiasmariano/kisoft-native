import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CalendarCustom from '../../../../../shared/components/calendar/CalendarCustom'
import TimePicker from '../../../../../shared/components/timePicker/TimePicker'
import ButtonK from '../../../../../shared/components/inputs/ButtonK'

const StepA = ({ inputReserva, setInputReserva, setStepNumber }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const onDayPress = (b) => {
        setInputReserva({ ...inputReserva, dateTime: { ...inputReserva.dateTime, date: b } })
    }

    const onSetTime = (dateTime) => {
        setInputReserva({ ...inputReserva, dateTime: { ...inputReserva.dateTime, houre: dateTime } })
        setDatePickerVisibility(false)
    }
    return (
        <View style={styles.container}>
            <CalendarCustom
                selectedDate={inputReserva.dateTime.date.dateString}
                disabledDates={['2020-07-02', '2020-07-03', '2020-07-13', '2020-07-14', '2020-07-21']}
                onPressDate={onDayPress} />
            <Text
                style={styles.linkButton}
                onPress={() => setDatePickerVisibility(!isDatePickerVisible)}>
                {inputReserva.dateTime.houre ? `${inputReserva.dateTime.houre.getHours()}:${inputReserva.dateTime.houre.getMinutes()}` : 'Seleccionar hora'}
            </Text>
            <TimePicker
                isDatePickerVisible={isDatePickerVisible}
                hideDatePicker={() => setDatePickerVisibility(false)}
                handleConfirm={onSetTime} />
            <ButtonK
                title="Siguiente"
                disabled={!(inputReserva.dateTime.date !== '' && inputReserva.dateTime.houre !== '')}
                style={styles.nextButton}
                onPress={() => setStepNumber('B')} />
        </View>
    )
}

export default StepA;

const styles = {
    container: {
        marginTop: 50
    },
    linkButton: {
        color: '#2d2c2c',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 40
    },
    nextButton: {
        backgroundColor: '#E0273E',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    }
}