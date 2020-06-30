import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Stat = ({ item }) => {
  return (
    <View style={styles.stat}>
      {item}
    </View>
  );
}

export default Stat;