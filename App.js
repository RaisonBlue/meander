import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import store from './stores/index'
import SplashScreen from './screens/Splash'
import LoginScreen from './screens/Login.jsx'
import DayPhoto from './screens/DayPhoto.jsx'
import DayStory from './screens/DayStory.jsx'
import DayFeed from './screens/DayFeed.jsx'
import NewDay from './screens/NewDay.jsx'
import NewDayPhoto from './screens/NewDayPhoto.jsx'
import AppInitializer from './components/AppInitializer'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default () => {
  return (
    <Provider store={store}>
      <AppInitializer>
        <Stack.Navigator headerMode='none' >
          <Stack.Screen name="NewDay" component={NewDay} />
          <Stack.Screen name="NewDayPhoto" component={NewDayPhoto} />
          <Stack.Screen name="DayFeed" component={DayFeed} />
          <Stack.Screen name="DayStory" component={DayStory} />
          <Stack.Screen name="DayPhoto" component={DayPhoto} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </AppInitializer>
    </Provider>
  )
}
