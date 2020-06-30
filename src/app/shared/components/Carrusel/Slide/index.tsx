import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Slide = ({ item }) => {

  return (
    <View style={styles.slide}>
      {item}
    </View>
  );
}

export default Slide;