import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import ViewBackground from '../components/ViewBackground'
import RemoteControl from '../components/RemoteControl'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Photo from '../components/Photo'
import Grid from '../components/Grid'
import { currentDay } from '../stores/current-day'
import { editingDay, update, addPhoto } from '../stores/editing-day'
import { useSelector, useDispatch } from 'react-redux'
import { toDate } from '../modules/timestamp'
import burstCache from '../modules/cache-burster'

const MemoizedGrid = React.memo(Grid,
  (prev, next) => prev.data.length === next.data.length
)

export default ({ navigation }) => {
  const day = useSelector(currentDay)
  const newDay = useSelector(editingDay)
  const dispatch = useDispatch()
  const [error] = useState(false)

  const togglePhoto = ([selected, photo]) =>{
    selected
      ? dispatch(addPhoto(photo))
      : dispatch(removePhoto(photo))
  }

  return (
    <RemoteControl navigate={navigation.navigate} bottom="DayFeed" right={() => navigation.navigate('NewDayCover')}>
      <ViewBackground blurRadius={4} cover={{ uri: day.cover }}>
        <ScrollView style={styles.mainWrapper}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 50}}>
            <ScreenTitle title={ newDay.location } />
            <ScreenSubTitle title="Just keep the nicest!" />
          </View>
          <MemoizedGrid data={Array(120).fill({}).map(() => ({source: burstCache('https://picsum.photos/200/300')}))} cols={4}>
            <Photo selectable={true} onSelect={togglePhoto} />
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
