import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import Bar from '../components/Bar'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import { toDate } from '../modules/timestamp'

const SplashTitle = ({day}) => day
  ? (
    <Bar>
      <ScreenTitle title={ day.location } />
      <ScreenSubTitle title={ toDate(day.date) } />
    </Bar>
  )
  : (<View />)

export default ({ navigation, day }) => {
  return (
    <ViewBackground cover={{ uri: day.cover }}>
      <View style={styles.mainWrapper}>
        <SplashTitle day={day} />
      </View>
    </ViewBackground>
  );
}

const alignedCenter = { flex: 1, alignItems: "center", justifyContent: "center" }

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    padding: 20
  },
  bottomHalf: alignedCenter,
});
