import { View, Text, Image } from "react-native";
import HeroStyle from "./HeroStyle";

export const HeroComponent = () => {
  return (
    <View style={HeroStyle.hero}>
      <Image source={require('../../../assets/HERO_BG.png')} style={HeroStyle.bg}></Image>
      <View style={HeroStyle.heroContents}>
        <View style={HeroStyle.logoHolder}>
        <Image source={require('../../../assets/LOGO_BIG.png')} style={HeroStyle.logo}></Image>

        </View>
      </View>
    </View>
  );
}