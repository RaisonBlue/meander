import React from 'react';
import { Text } from 'react-native';

export default function ViewBackground({children, style, ...otherProps}) {
  return (
    <Text {...otherProps} style={{
      color: "#fff",
      textAlign: "justify",
      ...style
      }}>
      { children }
    </Text>
  )
}
