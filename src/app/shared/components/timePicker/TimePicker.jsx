import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = ({ isDatePickerVisible, handleConfirm, hideDatePicker }) => {
    return (
        <>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                headerTextIOS="Ingresá un horario"
            />
        </>
    )
}

export default TimePicker;