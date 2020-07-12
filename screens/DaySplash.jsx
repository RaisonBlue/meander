import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import Bar from '../components/Bar'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'

export default function App({ navigation }) {
  return (
    <ViewBackground bgSrc={require('../assets/bg_cappadocia.jpg')}>
      <View style={styles.mainWrapper}>
        <Bar>
          <ScreenTitle title="Cappadoce" />
          <ScreenSubTitle title="11.07.2020" />
        </Bar>
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
