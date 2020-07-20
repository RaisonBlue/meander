import React from 'react'
import Icon from './Icon'
import { View, TouchableOpacity } from 'react-native'

const buttonSize = 30

export default ({ navigate, top, right, bottom, left, children }) => {
  const onPress = makeOnPress({ navigate })
  return (
    <View style={{ flex: 1 }}>
      { children }
      <View style={{ flexDirection: "column", alignItems: "baseline", position: "absolute", right: 50, top: 50, 'zIndex': 300 }}>

        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <View style={{ flex: 1, width: buttonSize, height: buttonSize }} />
          <TouchableOpacity onPress={ onPress(top)}><Icon style={{ flex: 1 }} name="sun" size={buttonSize} /></TouchableOpacity>
          <View style={{ flex: 1, width: buttonSize, height: buttonSize }} />
        </View>

        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <TouchableOpacity onPress={ onPress(left)}><Icon style={{ flex: 1 }} name="sun" size={buttonSize} /></TouchableOpacity>
          <View style={{ flex: 1, width: buttonSize, height: buttonSize }} />
          <TouchableOpacity onPress={ onPress(right)}><Icon style={{ flex: 1 }} name="sun" size={buttonSize} /></TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <View style={{ flex: 1, width: buttonSize, height: buttonSize }} />
          <TouchableOpacity onPress={ onPress(bottom)}><Icon style={{ flex: 1 }} name="sun" size={buttonSize} /></TouchableOpacity>
          <View style={{ flex: 1, width: buttonSize, height: buttonSize }} />
        </View>
      </View>
    </View>
  )
}

const makeOnPress = ({ navigate }) => direction => () => {
  if(!direction || (typeof direction !== 'function' && direction.length === 0)) return
  return typeof direction === 'function'
    ? direction()
    : navigate(direction)
}
