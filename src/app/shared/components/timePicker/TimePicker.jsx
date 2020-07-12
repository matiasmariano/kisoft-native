import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = ({ isDatePickerVisible, handleConfirm, hideDatePicker }) => {
    return (
        <>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={(dateTime) => { handleConfirm(dateTime) }}
                onCancel={hideDatePicker}
                headerTextIOS="Ingresá un horario"
            />
        </>
    )
}

export default TimePicker;

//https://www.npmjs.com/package/react-native-modal-datetime-picker