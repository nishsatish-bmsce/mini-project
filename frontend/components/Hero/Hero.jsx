import { View, Text, Image, TextInput } from "react-native";
import HeroStyle from "./HeroStyle";
import { useFonts } from "expo-font";

export const HeroComponent = ({ nav }) => {
  const [loadedFonts] = useFonts({
    'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

  if (!loadedFonts) {
    return <Text>Wait</Text>
  }

  const onClickIt = () => {
    nav.navigate('STOCK');
  }

  return (
    <View style={HeroStyle.hero}>
      <Image source={require('../../assets/HERO_BG.png')} style={HeroStyle.bg}></Image>
      <View style={HeroStyle.heroContents}>
        <View style={HeroStyle.logoHolder}>
          <Image source={require('../../assets/LOGO_BIG.png')} style={HeroStyle.logo}></Image>
        </View>
        <Text style={HeroStyle.tagline}>
          One App
        </Text>
        <Text style={HeroStyle.tagline}>
          all things stocks
        </Text>

        <TextInput 
          style={HeroStyle.searchBar} 
          placeholder="Search" 
          placeholderTextColor={'#3f3f3f'}
          onSubmitEditing={onClickIt}
        />
      </View>
    </View>
  );
}