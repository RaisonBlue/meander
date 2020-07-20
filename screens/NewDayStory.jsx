import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import HeroTitle from '../components/HeroTitle'
import MTextInput from '../components/MTextInput'
import RemoteControl from '../components/RemoteControl'
import { currentDay } from '../stores/current-day'
import { editingDay, update } from '../stores/editing-day'
import { useSelector, useDispatch } from 'react-redux'

export default function App({ navigation }) {
  const day = useSelector(currentDay)
  const newDay = useSelector(editingDay)
  const dispatch = useDispatch()
  const [error] = useState(false)
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const onEnd = () => { 
    dispatch(update({ location, date }))
    navigation.navigate('NewDayPhoto')
  }

  return (
    <RemoteControl navigate={navigation.navigate} left="NewDayCover" bottom="DayFeed" right={onEnd}>
      <ViewBackground blurRadius={4} cover={{ uri: day.bgUrl }}>
      <View style={styles.mainWrapper}>
        <View style={ styles.topHalf }>
          <HeroTitle title='New Day' />
          <Text>{ error }</Text>
        </View>
        <View style={ styles.bottomHalf }>
          <MTextInput placeholder ="Location" value={location} setValue={setLocation} maxLength={20} mutators={[s => s.toLowerCase()]} />
          <MTextInput placeholder ="Date" value={date} setValue={setDate} maxLength={50} onSubmitEditing={() => authenticate(name, date)} />
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
