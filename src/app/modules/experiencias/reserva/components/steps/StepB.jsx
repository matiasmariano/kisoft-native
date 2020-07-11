import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CalendarCustom from '../../../../../shared/components/calendar/CalendarCustom'

const StepB = ({ inputReserva, setInputReserva }) => {

    const onDayPress = (a, b) => {
        setInputReserva({ ...inputReserva, dateTimeAlt: { ...inputReserva.dateTimeAlt, date: b } })
    }

    return (
        <>
            <CalendarCustom
                selectedDate={inputReserva.dateTimeAlt.date.dateString}
                disabledDates={['2020-07-02', '2020-07-03', '2020-07-13', '2020-07-14', '2020-07-21']}
                onPressDate={onDayPress} />
        </>
    )
}

export default StepB;

const styles = {
    body: {
        backgroundColor: '#ffffff',
        flex: 1,
        height: 200
    }
}