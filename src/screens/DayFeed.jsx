import React from 'react'
import DaySplashScreen from './DaySplash'
import RemoteControl from '../components/RemoteControl'
import { useSelector, useDispatch } from 'react-redux'
import { next, previous, currentDay } from '../stores/current-day'
import { View } from 'react-native'

export default ({ navigation }) => {
  const day = useSelector(currentDay)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1 }}>
      <RemoteControl
        navigate={ navigation.navigate }
        top={ () => dispatch(next()) }
        left=""
        right="DayStory"
        bottom={ () => dispatch(previous()) }
      >
        <DaySplashScreen day={day} style={{ flex: 1 }} />
      </RemoteControl>
    </View>
  )
}
