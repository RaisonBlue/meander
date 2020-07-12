import React from 'react'
import { View } from 'react-native'
import { splitEvery } from 'ramda'

let key = 0
let lK = 0

const drawItem = template => (item) => {
  return React.createElement(
    template.type,
    { ...template.props, key: key++, ...item}
  )
}

const drawLine = (data, template) => {
  return (
    <View key={lK++} style={{ flex: 1, flexDirection: "row", marginVertical:10, justifyContent:"space-evenly" }}>  
      {data.map(drawItem(template))}
    </View>
  )
}

export default ({ style, data=[], cols, children }) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", paddingTop: 50 }}>
      { splitEvery(cols, data).map(line => drawLine(line, children))}
    </View>
  )
}