import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from '../Login/LoginStyle';
import HomeStyle from "../Home/HomeStyle";
import { useFonts } from 'expo-font';
import { useState } from "react";
import { signupHandler } from "./SignupHandler";

export const Signup = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-EB': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    'Monty-B': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Monty-L': require('../../assets/fonts/Montserrat-Light.ttf'),
  });
  const [phone, setPhone] = useState();
  const [username, setUsername] = useState();
  const [pwd, setPwd] = useState();

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  const attemptSignup = async () => {
    const token = await signupHandler(phone, username, pwd);
    if (token) {
      navigation.navigate('HOME');
    }    
  }

  return (
    <ScrollView style={styles.loginBg}>
      <View style={styles.loginFlex}>
        <Text style={styles.loginHeader}>
          Signup
        </Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.formInput} 
            placeholder="Phone" 
            placeholderTextColor='rgba(255, 255, 255, 0.62)' 
            autoCorrect={false} 
            onChangeText={newText => setPhone(newText)} 
            autoCapitalize="none" />
          <TextInput 
            style={styles.formInput} 
            placeholder="Username" 
            placeholderTextColor='rgba(255, 255, 255, 0.62)' 
            autoCorrect={false} 
            onChangeText={newText => setUsername(newText)}
            autoCapitalize="none" />
          <TextInput 
            style={styles.formInput} 
            placeholder="Password" 
            placeholderTextColor='rgba(255, 255, 255, 0.62)' 
            autoCorrect={false} 
            onChangeText={newText => setPwd(newText)}
            autoCapitalize="none" />
        </View>

        <TouchableOpacity style={styles.formSubmitter} onPress={attemptSignup}>
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