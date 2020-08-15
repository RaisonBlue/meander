import React, { useState } from 'react'
import { Image, View, TouchableOpacity, StyleSheet } from "react-native"

export default ({ item, onSelect, selectable = false }) => {
  const [selected, setSelection] = useState(false)
  const select = () => {
    const isSelected = !selected
    setSelection(isSelected)
    onSelect([isSelected, item])
  }
  return selectable
  ? (
    <TouchableOpacity onPress={select}>
      <Image source={item.source} style={ selected ? styles.selected : styles.default } />
      { selected && <View style={ styles.chip } /> }
    </TouchableOpacity>
  )
  : (<Image source={item.source} style={ styles.default } />)
}

const styles = StyleSheet.create({
  default: {
    borderWidth: 0,
    height: 95,
    width: 95,
    margin: 2,
  },
  selected: {
    borderWidth: 10,
    borderColor: "#0000",
    height: 95,
    width: 95,
    margin: 2,
  },
  chip: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#64ffda",
    position: 'absolute',
    right: 15,
    top: 15
  }
})
