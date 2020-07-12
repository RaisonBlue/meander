import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import HeroTitle from '../components/HeroTitle'

export default function App({ navigation }) {
  return (
    <ViewBackground bgSrc={require('../assets/bg_cappadocia.jpg')}>
      <View style={styles.mainWrapper}>
        <View style={ styles.topHalf }>
          {/* <HeroTitle title="Meander" /> */}
        </View>
      </View>
    </ViewBackground>
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
  bottomHalf: alignedCenter,
});
