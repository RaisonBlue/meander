import React from 'react'
import { Text } from  'react-native'

export default (props) => {
  return (
    <Text style={{ 
      color: '#fff',
      fontSize: 40,
      textTransform: 'uppercase',
      fontFamily: "BebasNeue-Regular",
      letterSpacing: 7 }}>{ props.title }</Text>
  )
}
