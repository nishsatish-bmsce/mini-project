import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeComponent as Home } from './pages/Home/ Home';

export default function App() {
  return (
      <View>
        <Home></Home>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,

  },
});
