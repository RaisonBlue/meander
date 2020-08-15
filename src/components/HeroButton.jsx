import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from  'react-native'

export default (props) => {
  return (
    <TouchableOpacity onPress={() => true} style={styles(props.color).button} onPressIn={props.onPress}>
        <Text style={ styles(props.color).text }>{ props.title }</Text>
    </TouchableOpacity>
  )
}

const styles = (color = "#fff") => StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: color,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginVertical: 50,
  },
  text: {
    color,
    textTransform: 'uppercase',
    fontSize: 25,
    fontFamily: "BebasNeue-Regular"
  }
});
