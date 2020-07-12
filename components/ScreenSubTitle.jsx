import React from 'react'
import { Text,
  View } from  'react-native'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default (props) => {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  return !fontsLoaded
  ? <Text>Loading...</Text>
  : (
    <Text style={{ 
      color: '#fff',
      fontSize: 20,
      textTransform: 'uppercase',
      fontFamily: "BebasNeue_400Regular",
      letterSpacing: 0 }}>{ props.title }</Text>
  )
}
