import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from './Icon'

export default ({ icon, value, units }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Icon name={icon} />
      <Text style={styles.value}>{ value }</Text>
      <Text style={styles.unit}>{ units }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  value: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "BebasNeue-Regular"
  },
  unit: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "BebasNeue-Regular",
    alignSelf: "flex-start"
  }
})