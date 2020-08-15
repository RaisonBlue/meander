import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const defaultConfig = { mutators: [] }

const onTextChange = ({setValue, config}) => (s) =>
  setValue(config.mutators.reduce((str, mutate) => mutate(str), s))

export default ({ maxLen, mutators = [], value, setValue, ...otherProps }) => {
  return (<TextInput
      {...otherProps}
      style={styles.input}
      value={value}
      onChangeText={onTextChange({setValue, config: {...defaultConfig, maxLen, mutators}})} />)
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#FFF",
    width: 280,
    marginVertical: 10,
    borderWidth: 2,
    fontSize: 25,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "BebasNeue-Regular"
  },
})
