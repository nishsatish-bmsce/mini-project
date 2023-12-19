import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeComponent as Home } from './pages/Home/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StockPage as Stock } from './pages/Stock/Stock';
import { Wishlist } from './pages/Wishlist/Wishlist';

const Stack = createNativeStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name='HOME'
          component={Home}
        />

        <Stack.Screen 
          name='STOCK'
          component={Stock}
        />

        <Stack.Screen 
          name='WISHLIST'
          component={Wishlist}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
