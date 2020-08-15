/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './src/stores/index'

// Screens
import SplashScreen from './src/screens/Splash.jsx'
import LoginScreen from './src/screens/Login.jsx'
import DayPhoto from './src/screens/DayPhoto.jsx'
import DayStory from './src/screens/DayStory.jsx'
import DayFeed from './src/screens/DayFeed.jsx'
import NewDay from './src/screens/NewDay.jsx'
import NewDayPhoto from './src/screens/NewDayPhoto.jsx'
import NewDayCover from './src/screens/NewDayCover.jsx'
import NewDayStory from './src/screens/NewDayStory.jsx'
import AppInitializer from './src/components/AppInitializer'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <AppInitializer>
          <Stack.Navigator headerMode='none' >
            <Stack.Screen name="NewDay" component={NewDay} />
            <Stack.Screen name="NewDayPhoto" component={NewDayPhoto} />
            <Stack.Screen name="NewDayCover" component={NewDayCover} />
            <Stack.Screen name="NewDayStory" component={NewDayStory} />
            <Stack.Screen name="DayFeed" component={DayFeed} />
            <Stack.Screen name="DayStory" component={DayStory} />
            <Stack.Screen name="DayPhoto" component={DayPhoto} />
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </AppInitializer>
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export default App
