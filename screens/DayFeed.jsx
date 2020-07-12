import React from 'react'
import ViewPager from '@react-native-community/viewpager'
import DaySplashScreen from './DaySplash'

export default () => {
  return (
    <ViewPager style={{ flex: 1 }} initialPage={0}>
      <DaySplashScreen key="0"/>
      <DaySplashScreen key="1"/>
    </ViewPager>
  )
}
