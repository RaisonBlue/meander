import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './screens/Splash'
import LoginScreen from './screens/Login.jsx'
import DayPhoto from './screens/DayPhoto.jsx'
import DayStory from './screens/DayStory.jsx'
import DaySplash from './screens/DaySplash.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="DayPhoto" component={DayPhoto} />
        <Stack.Screen name="DayStory" component={DayStory} />
        <Stack.Screen name="DaySplash" component={DaySplash} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
