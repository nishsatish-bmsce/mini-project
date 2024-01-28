import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './LoginStyle';
import HomeStyle from "../Home/HomeStyle";
import { useFonts } from 'expo-font';
import { useState } from "react";
import { loginHandler } from "./LoginHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-EB': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Monty-B': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Monty-L': require('../../assets/fonts/Montserrat-Light.ttf'),
  });

  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  const attemptLogin = async () => {
    const token = await loginHandler(email, pwd);
    if (token) {
      navigation.navigate('HOME');
    }
  }

  return (
    <View style={styles.loginBg}>
      <View style={styles.loginFlex}>
        <Text style={styles.loginHeader}>
          Login
        </Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.formInput} 
            placeholder="Phone" 
            placeholderTextColor='rgba(255, 255, 255, 0.62)'
            onChangeText={newText => setEmail(newText)}
            autoCorrect={false}
          />

          <TextInput 
            style={styles.formInput} 
            placeholder="Password" 
            placeholderTextColor='rgba(255, 255, 255, 0.62)'
            onChangeText={newText => setPwd(newText)}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none" 
          />
        </View>

        <TouchableOpacity style={styles.formSubmitter} onPress={attemptLogin}>
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
            onPress={() => {navigation.navigate('SIGNUP')}}>
              Signup
          </Text>
        </View>
      </View>
    </View>
  );
}