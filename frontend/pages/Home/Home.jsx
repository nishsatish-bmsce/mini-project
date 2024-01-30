import { View, Text, ScrollView } from "react-native";
import { HeroComponent } from "../../components/Hero/Hero";
import HomeStyle from "./HomeStyle";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';


export const HomeComponent = ({navigation}) => {
  const [loadedFonts] = useFonts({
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

  const [isLoggedIn, setIsLoggedIn] = useState();

  useFocusEffect(
    useCallback(() => {
      const checkLoginStatus = async () => {
        const jwt_token = await AsyncStorage.getItem('JWT');
        if (jwt_token) {
          setIsLoggedIn(true);
        }
      }
      
      checkLoginStatus();
    })
  );

  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.removeItem('JWT');
    navigation.navigate('LOGIN')
  }


  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  return (
    <ScrollView style={HomeStyle.blackBg}>
      <HeroComponent nav={navigation}></HeroComponent>
        {
          !isLoggedIn &&
          <View style={HomeStyle.authLinks}>
            <Text 
              style={[HomeStyle.authLink, HomeStyle.login]} 
              onPress={() => {navigation.navigate('LOGIN')}}>
                Login
            </Text>
            <Text 
              style={[HomeStyle.authLink, HomeStyle.signup]}
              onPress={() => {navigation.navigate('SIGNUP')}}>
                Signup
            </Text>
          </View>
        }

        {
          isLoggedIn &&
          <View style={HomeStyle.authLinks}>
            <Text 
              style={[HomeStyle.authLink, HomeStyle.login]} 
              onPress={logout}>
                Logout
            </Text>
            <Text 
              style={[HomeStyle.authLink, HomeStyle.signup]}
              onPress={() => {navigation.navigate('WISHLIST')}}>
                Wishlist
            </Text>
          </View>
        }
    </ScrollView>
  );
}