import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CalendarCustom from '../../../../../shared/components/calendar/CalendarCustom'
import TimePicker from '../../../../../shared/components/timePicker/TimePicker'

const StepA = ({ inputReserva, setInputReserva }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const onDayPress = (a, b) => {
        setInputReserva({ ...inputReserva, dateTime: { ...inputReserva.dateTime, date: b } })
    }

    return (
        <>
            <CalendarCustom
                selectedDate={inputReserva.dateTime.date.dateString}
                disabledDates={['2020-07-02', '2020-07-03', '2020-07-13', '2020-07-14', '2020-07-21']}
                onPressDate={onDayPress} />
            <Text onPress={() => setDatePickerVisibility(!isDatePickerVisible)}>Seleccionar hora</Text>
            <TimePicker isDatePickerVisible={isDatePickerVisible} hideDatePicker={() => setDatePickerVisibility(false)} />
        </>
    )
}

export default StepA;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    }
}

//https://www.npmjs.com/package/react-native-calendars