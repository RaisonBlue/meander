import React from 'react'
import { Text, View } from  'react-native'

export default (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: '#fff', fontSize: 60, textTransform: 'uppercase', fontFamily: "BebasNeue-Regular", letterSpacing: 15 }}>{ props.title }</Text>
      <View style={{ height: 4, width: 180, backgroundColor: "#FFF" }} />
    </View>
  )
}
