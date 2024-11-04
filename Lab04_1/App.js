import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import Calculator from './pages/Calculator'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Screen2a from './pages/Screen2a';
import Screen2b from './pages/Screen2b';
import Screen2c from './pages/Screen2c';
import Screen2d from './pages/Screen2d';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Calculator" component={Calculator} />
      <Drawer.Screen name="Screen2a" component={Screen2a} />
      <Drawer.Screen name="Screen2b" component={Screen2b} />
      <Drawer.Screen name="Screen2c" component={Screen2c} />
      <Drawer.Screen name="Screen2d" component={Screen2d} />

    </Drawer.Navigator>

    </NavigationContainer>
     
  )
}

export default App

const styles = StyleSheet.create({})