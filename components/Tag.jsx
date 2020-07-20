import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default ({ icon, value, units }) => {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  return fontsLoaded
  ? (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Image style={styles.icon} source={require(`../assets/icons/${icon}.svg`)}/>
      <Text style={styles.value}>{ value }</Text>
      <Text style={styles.unit}>{ units }</Text>
    </View>
  )
  : <Text>Loading...</Text>
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  },
  value: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "BebasNeue_400Regular"
  },
  unit: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "BebasNeue_400Regular",
    alignSelf: "flex-start"
  }
})