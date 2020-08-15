import React from 'react'
import { Text,
  View } from  'react-native'

export default (props) => {
  return (
    <Text style={{ 
      color: '#fff',
      fontSize: 20,
      textTransform: 'uppercase',
      fontFamily: "BebasNeue-Regular",
      letterSpacing: 0 }}>{ props.title }</Text>
  )
}
