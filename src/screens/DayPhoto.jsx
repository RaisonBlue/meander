import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import ViewBackground from '../components/ViewBackground'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Photo from '../components/Photo'
import Grid from '../components/Grid'
import RemoteControl from '../components/RemoteControl'
import burstCache from '../modules/cache-burster'
import { currentDay } from '../stores/current-day'
import { useSelector } from 'react-redux'
import { toDate } from '../modules/timestamp'

export default ({ navigation }) => {
  const day = useSelector(currentDay)
  return (
    <RemoteControl navigate={navigation.navigate} left="DayStory">
      <ViewBackground blurRadius={4} cover={{ uri: day.cover }}>
        <ScrollView style={styles.mainWrapper}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 50}}>
            <ScreenTitle title={ day.location } />
            <ScreenSubTitle title={ toDate(day.date) } />
          </View>
          <Grid data={Array(120).fill({}).map(() => ({source: burstCache('https://picsum.photos/200/300')}))} cols={4}>
            <Photo />
          </Grid>
        </ScrollView>
      </ViewBackground>
    </RemoteControl>
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
