import { View } from "react-native";
import { HeroComponent } from "../../components/home/Hero/Hero";
import HomeStyle from "./HomeStyle";

export const HomeComponent = () => {
  return (
    <View style={HomeStyle.blackBg}>
      <HeroComponent></HeroComponent>
    </View>
  );
}