import React from 'react'
import { Image } from 'react-native'

export default ({name, size = 30}) => {
  return (
    <Image style={{ width: size, height: size}} source={require(`../assets/icons/${name}.svg`)}/>
  )
}
