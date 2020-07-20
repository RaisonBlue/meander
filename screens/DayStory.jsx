import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ViewBackground from '../components/ViewBackground'
import Bar from '../components/Bar'
import ScreenTitle from '../components/ScreenTitle'
import ScreenSubTitle from '../components/ScreenSubTitle'
import Tag from '../components/Tag'
import Paragraph from '../components/Paragraph'
import RemoteControl from '../components/RemoteControl'
import { currentDay } from '../stores/current-day'
import { useSelector } from 'react-redux'
import { toDate } from '../modules/timestamp'

export default function App({ navigation }) {
  const day = useSelector(currentDay)

  return (
    <RemoteControl navigate={navigation.navigate} left="DayFeed" right="DayPhoto">
      <ViewBackground blurRadius={4} cover={{ uri: day.bgUrl }}>
        <ScrollView style={styles.mainWrapper}>
          <View>
            <ScreenTitle title={day.location} />
            <ScreenSubTitle title={toDate(day.date)} />
          </View>
          <Bar style={{ paddingVertical: 50 }}>
            <Tag icon="sun" value={day.temperature} units="°C" />
            <Tag icon="walk" value={day.kilometers} units="km" />
            <Tag icon="photo" value={day.photosCount} units="" />
          </Bar>
          <View style={{ flex: 1 }}>
            <Paragraph>{day.story}</Paragraph>
          </View>
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
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  bottomHalf: alignedCenter,
});
