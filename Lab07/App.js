import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// or any files within the Snack
import Home from './components/Home';
import ListProduct from './components/ListProduct';
import ProductDetail from './components/ProductDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="ListProduct" component={ListProduct} />

        </Stack.Navigator>
      </SafeAreaView>
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
});
