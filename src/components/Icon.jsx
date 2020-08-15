import React from 'react'
import { Image } from 'react-native'

export default ({name, size = 30}) => {
  switch(name) {
    case 'sun':
      return (<Image style={{ width: size, height: size}} source={require(`../assets/icons/sun.png`)}/>)
    case 'walk':
      return (<Image style={{ width: size, height: size}} source={require(`../assets/icons/walk.png`)}/>)
    case 'photo':
      return (<Image style={{ width: size, height: size}} source={require(`../assets/icons/photo.png`)}/>)
  }
}
