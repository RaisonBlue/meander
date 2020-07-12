import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import Bar from '../components/Bar'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Paragraph from '../components/Paragraph'

export default function App({ navigation }) {
  return (
    <ViewBackground blurRadius={4} bgSrc={require('../assets/bg_cappadocia.jpg')}>
      <ScrollView style={styles.mainWrapper}>
        <View>
          <ScreenTitle title="Cappadoce" />
          <ScreenSubTitle title="11.07.2020" />
        </View>
        <Bar style={{ paddingVertical: 50 }}>
          <View style={{ backgroundColor: '#00F', width: 80, height: 60 }} />
          <View style={{ backgroundColor: '#00F', width: 80, height: 60 }} />
          <View style={{ backgroundColor: '#00F', width: 80, height: 60 }} />
        </Bar>
        <View style={{ flex: 1 }}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam et leo tristique ullamcorper eget sit amet dui. Nullam convallis, mi id ornare cursus, ex lorem aliquet velit, sit amet volutpat ligula quam et libero. Pellentesque id justo tortor. Mauris augue lorem, volutpat et viverra non, condimentum sit amet eros. In hac habitasse platea dictumst. Quisque rutrum pulvinar mi, vel porta felis sagittis id. Donec vel est massa. In ipsum urna, volutpat eget pellentesque vel, auctor id nunc. Suspendisse potenti. Nullam imperdiet placerat arcu eget fermentum.
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam et leo tristique ullamcorper eget sit amet dui. Nullam convallis, mi id ornare cursus, ex lorem aliquet velit, sit amet volutpat ligula quam et libero. Pellentesque id justo tortor. Mauris augue lorem, volutpat et viverra non, condimentum sit amet eros. In hac habitasse platea dictumst. Quisque rutrum pulvinar mi, vel porta felis sagittis id. Donec vel est massa. In ipsum urna, volutpat eget pellentesque vel, auctor id nunc. Suspendisse potenti. Nullam imperdiet placerat arcu eget fermentum.
          </Paragraph>
        </View>
      </ScrollView>
    </ViewBackground>
  );
}

const alignedCenter = { flex: 1, alignItems: "center", justifyContent: "center" }

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  bottomHalf: alignedCenter,
});
