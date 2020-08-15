import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import ViewBackground from '../components/ViewBackground'
import RemoteControl from '../components/RemoteControl'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Grid from '../components/Grid'
import { currentDay } from '../stores/current-day'
import { editingDay, update } from '../stores/editing-day'
import Photo from '../components/Photo'
import { useSelector, useDispatch } from 'react-redux'
import { toDate } from '../modules/timestamp'
import burstCache from '../modules/cache-burster'

const MemoizedGrid = React.memo(Grid,
  (prev, next) => prev.data.length === next.data.length
)

export default function App({ navigation }) {
  const day = useSelector(currentDay)
  const newDay = useSelector(editingDay)
  const dispatch = useDispatch()
  const [error] = useState(false)
  const pickCover = cover => dispatch(update({ cover }))

  const onEnd = () => {
    navigation.navigate('NewDayStory')
  }

  return (
    <RemoteControl navigate={navigation.navigate} left="NewDayPhoto" bottom="DayFeed" right={onEnd}>
      <ViewBackground blurRadius={4} cover={{ uri: day.cover }}>
        <ScrollView style={styles.mainWrapper}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 50}}>
            <ScreenTitle title={ newDay.location } />
            <ScreenSubTitle title={ toDate(newDay.date) } />
          </View>
          <MemoizedGrid data={Array(120).fill({}).map(() => ({source: burstCache('https://picsum.photos/200/300')}))} cols={4}>
            <Photo selectable={true} onSelect={pickCover} />
          </MemoizedGrid>
        </ScrollView>
      </ViewBackground>
    </RemoteControl>
  );
}

const alignedCenter = { flex: 1, alignItems: "center", justifyContent: "center" }

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  topHalf: {
    ...alignedCenter,
    justifyContent: "flex-end"
  },
  bottomHalf: {
    ...alignedCenter,
    paddingTop: 50
  },
})
