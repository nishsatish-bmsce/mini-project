import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../Login/LoginStyle';
import HomeStyle from "../Home/HomeStyle";
import { useFonts } from 'expo-font';

export const Signup = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-EB': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Monty-B': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Monty-L': require('../../assets/fonts/Montserrat-Light.ttf'),
  });

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  const goToStock = () => {
    navigation.navigate('STOCK');
  }

  return (
    <ScrollView style={styles.loginBg}>
      <View style={styles.loginFlex}>
        <Text style={styles.loginHeader}>
          Signup
        </Text>

        <View style={styles.form}>
          <TextInput style={styles.formInput} placeholder="E-Mail Address" placeholderTextColor='rgba(255, 255, 255, 0.62)'/>
          <TextInput style={styles.formInput} placeholder="Phone" placeholderTextColor='rgba(255, 255, 255, 0.62)'/>
          <TextInput style={styles.formInput} placeholder="Username" placeholderTextColor='rgba(255, 255, 255, 0.62)'/>
          <TextInput style={styles.formInput} placeholder="Password" placeholderTextColor='rgba(255, 255, 255, 0.62)'/>
        </View>

        <TouchableOpacity style={styles.formSubmitter} onPress={goToStock}>
          <Text style={styles.btnText}>GO</Text>
        </TouchableOpacity>

        <View style={HomeStyle.authLinks}>
          <Text 
            style={[HomeStyle.authLink, HomeStyle.login]} 
            onPress={() => {navigation.navigate('HOME')}}>
              Home
          </Text>
          <Text 
            style={[HomeStyle.authLink, HomeStyle.signup]}
            onPress={() => {navigation.navigate('LOGIN')}}>
              Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}