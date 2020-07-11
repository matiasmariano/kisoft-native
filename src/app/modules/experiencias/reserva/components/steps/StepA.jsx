import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CalendarCustom from '../../../../../shared/components/calendar/CalendarCustom'

const StepA = ({ inputReserva, setInputReserva }) => {
    const onDayPress = (a, b) => {
        setInputReserva({ ...inputReserva, dateTime: { ...inputReserva.dateTime, date: b } })
    }

    return (
        <>
            <CalendarCustom
                selectedDate={inputReserva.dateTime.date.dateString}
                disabledDates={['2020-07-02', '2020-07-03', '2020-07-13', '2020-07-14', '2020-07-21']}
                onPressDate={onDayPress} />
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