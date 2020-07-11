import React, { useState, useEffect } from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar', 'Abr', 'May', 'Jun', 'Jul.', 'Ago', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
    today: 'Hoy'
};

const CalendarCustom = ({ selectedDate, onPressDate, disabledDates }) => {

    const onDayPress = (a, b) => {
        onPressDate(a, b)
    }

    //Crea el estilo para las fechas desactivadas...
    let dd = {}
    disabledDates.forEach(date => {
        dd[date] = {
            customStyles: {
                container: {
                    backgroundColor: 'transparent'
                },
                text: {
                    color: '#C4C4C4',
                    textDecorationLine: 'line-through'
                }
            }
        }
    });

    //Agrego la fecha seleccionada...
    dd[selectedDate] = { selected: true, marked: true, selectedColor: 'red' }
    LocaleConfig.defaultLocale = 'es';
    return (
        <>
            <Calendar
                markingType={'custom'}
                markedDates={dd}
                onDayPress={(day) => { onDayPress('selected day', day) }}
            />
        </>
    )
}

export default CalendarCustom;

const styles = {

}

//https://www.npmjs.com/package/react-native-calendars