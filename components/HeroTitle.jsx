import React from 'react'
import { Text, View } from  'react-native'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default (props) => {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  return !fontsLoaded
  ? <Text>Loading...</Text>
  : (
    <View style={{ alignItems: "center" }}>
      <Text style={{ color: '#fff', fontSize: 60, textTransform: 'uppercase', fontFamily: "BebasNeue_400Regular", letterSpacing: 15 }}>{ props.title }</Text>
      <View style={{ height: 4, width: 180, backgroundColor: "#FFF" }} />
    </View>
  )
}
