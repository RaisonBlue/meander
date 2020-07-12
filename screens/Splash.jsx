import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import HeroTitle from '../components/HeroTitle'
import HeroButton from '../components/HeroButton'

export default function App({ navigation }) {
  return (
    <ViewBackground>
      <View style={styles.mainWrapper}>
        <View style={ styles.topHalf }>
          <HeroTitle title="Meander" />
        </View>
        <View style={ styles.bottomHalf }>
          <HeroButton title="Start" onPress={() => navigation.navigate('Login')} />
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
