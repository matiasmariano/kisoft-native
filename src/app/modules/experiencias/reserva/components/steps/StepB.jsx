import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import CalendarCustom from '../../../../../shared/components/calendar/CalendarCustom'
import TimePicker from '../../../../../shared/components/timePicker/TimePicker'
import ButtonK from '../../../../../shared/components/inputs/ButtonK';

const StepB = ({ inputReserva, setInputReserva, setStepNumber }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const onDayPress = (b) => {
        setInputReserva({ ...inputReserva, dateTimeAlt: { ...inputReserva.dateTimeAlt, date: b } })
    }

    const onSetTime = (dateTime) => {
        setInputReserva({ ...inputReserva, dateTimeAlt: { ...inputReserva.dateTimeAlt, houre: dateTime } })
        setDatePickerVisibility(false)
    }

    return (
        <View style={styles.container}>
            <CalendarCustom
                selectedDate={inputReserva.dateTimeAlt.date.dateString}
                disabledDates={['2020-07-02', '2020-07-03', '2020-07-13', '2020-07-14', '2020-07-21']}
                onPressDate={onDayPress} />
            <Text
                style={styles.linkButton}
                onPress={() => setDatePickerVisibility(!isDatePickerVisible)}>
                {inputReserva.dateTimeAlt.houre ? `${inputReserva.dateTimeAlt.houre.getHours()}:${inputReserva.dateTimeAlt.houre.getMinutes()}` : 'Seleccionar hora'}
            </Text>
            <TimePicker
                isDatePickerVisible={isDatePickerVisible}
                hideDatePicker={() => setDatePickerVisibility(false)}
                handleConfirm={onSetTime} />
            <View style={styles.buttonContainer}>
                <ButtonK
                    title="Anterior"
                    style={styles.backButton}
                    onPress={() => setStepNumber('A')} />
                <ButtonK
                    title="Siguiente"
                    disabled={!(inputReserva.dateTimeAlt.date !== '' && inputReserva.dateTimeAlt.houre !== '')}
                    style={styles.nextButton}
                    onPress={() => setStepNumber('C')} />
            </View>
        </View>
    )
}

export default StepB;

const styles = {
    container: {
        marginTop: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingRight:'11%'
    },
    linkButton: {
        color: '#2d2c2c',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 40,
    },
    nextButton: {
        backgroundColor: '#E0273E',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    },
    backButton: {
        backgroundColor: '#ffffff',
        color: '#E0273E',
        borderColor: '#E0273E',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        marginTop: 50
    }
}