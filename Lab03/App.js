

import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './pages/FirstScreen';
import Screen1a from './pages/Screen1a';
import Screen1d from './pages/Screen1d';
import Screen1e from './pages/Screen1e';
import Screen2a from './pages/Screen2a';
import ScreenXMEye from './pages/XMEye';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
      <Stack.Screen name="Screen1a" component={Screen1a}  options={{ headerShown: false }}/>
      <Stack.Screen name="Screen1d" component={Screen1d}  options={{ headerShown: false }}/>
      <Stack.Screen name="Screen1e" component={Screen1e}  options={{ headerShown: false }}/>
      <Stack.Screen name="Screen2a" component={Screen2a}  options={{ headerShown: false }}/>
      <Stack.Screen name="ScreenXMEye" component={ScreenXMEye}  options={{ headerShown: false }}/>

      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})