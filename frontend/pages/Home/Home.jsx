import { View, Text, ScrollView } from "react-native";
import { HeroComponent } from "../../components/Hero/Hero";
import HomeStyle from "./HomeStyle";
import { useFonts } from "expo-font";


export const HomeComponent = ({navigation}) => {
  const [loadedFonts] = useFonts({
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  return (
    <ScrollView style={HomeStyle.blackBg}>
      <HeroComponent nav={navigation}></HeroComponent>
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
    </ScrollView>
  );
}