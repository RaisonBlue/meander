import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import ViewBackground from '../components/ViewBackground'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Grid from '../components/Grid'
import burstCache from '../modules/cache-burster'

export default ({ navigation }) => {
  return (
    <ViewBackground blurRadius={4} bgSrc={require('../assets/bg_cappadocia.jpg')}>
      <ScrollView style={styles.mainWrapper}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 50}}>
          <ScreenTitle title="Cappadoce" />
          <ScreenSubTitle title="11.07.2020" />
        </View>
        <Grid data={Array(120).fill({}).map(() => ({source: burstCache('https://picsum.photos/200/300')}))} cols={4}>
          <Image style={{ height: 100, width: 100 }} />
        </Grid>
      </ScrollView>
    </ViewBackground>
  )
}

const alignedCenter = { flex: 1, alignItems: "center", justifyContent: "center" }

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  bottomHalf: alignedCenter,
})
