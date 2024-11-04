import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// or any files within the Snack
import Screen4a from './components/Screen4a';
import Screen4b from './components/Screen4b';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/home.png')
                : require('./assets/home.png');
            } else if (route.name === 'Menu') {
              iconName = focused
                ? require('./assets/menu.png')
                : require('./assets/menu.png');
            } else if (route.name === 'Back') {
              iconName = focused
                ? require('./assets/back.png')
                : require('./assets/back.png');
            }

            return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
          },
          headerShown: false,
          tabBarShowLabel: false, 
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#1BA9FF',
          },
        })}
      >
        <Tab.Screen name="Menu" component={Screen4a} />
        <Tab.Screen name="Home" component={Screen4b} />
        <Tab.Screen name="Back" component={Screen4b} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
