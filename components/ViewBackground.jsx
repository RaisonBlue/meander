import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const defaultBackground = require('../assets/bg_default.jpg')

export default function ViewBackground({cover, children, ...otherProps}) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground {...otherProps} style={ styles.background } source={ cover || defaultBackground }>
        { children }
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  fillHeight: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: "center"
  }
})
