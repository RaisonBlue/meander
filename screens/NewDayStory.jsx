import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import HeroTitle from '../components/HeroTitle'
import RemoteControl from '../components/RemoteControl'
import MTextInput from '../components/MTextInput'
import { currentDay } from '../stores/current-day'
import { editingDay, update } from '../stores/editing-day'
import { useSelector, useDispatch } from 'react-redux'

export default function App({ navigation }) {
  const day = useSelector(currentDay)
  const newDay = useSelector(editingDay)
  const dispatch = useDispatch()
  const [error] = useState(false)
  const [story, setStory] = useState('')
  const onEnd = () => { 
    dispatch(update({ story }))
    // navigation.navigate('DayFeed') TODO push to api
  }

  return (
    <RemoteControl navigate={navigation.navigate} left="NewDayCover" bottom="DayFeed" right={onEnd}>
      <ViewBackground blurRadius={4} cover={{ uri: day.cover }}>
      <View style={styles.mainWrapper}>
        <View style={ styles.topHalf }>
          <HeroTitle title='New Day' />
          <Text>{ error }</Text>
        </View>
        <View style={ styles.bottomHalf }>
          <MTextInput placeholder ="Story" value={story} setValue={setStory} maxLength={20} />
        </View>
      </View>
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
