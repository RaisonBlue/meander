import React from 'react';
import { View } from 'react-native';

export default function ViewBackground({children, style, ...otherProps}) {
  return (
    <View {...otherProps} style={{ flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", ...style }}>
      { children }
    </View>
  )
}
