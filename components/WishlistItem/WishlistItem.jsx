import { Image, Text, View } from "react-native";
import styles from "./WishlistItemStyle";
import { useFonts } from "expo-font";

export const WishlistItemComponent = ({ ticker }) => {
  const [loadedFonts] = useFonts({
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Monty-M': require('../../assets/fonts/Montserrat-Medium.ttf')
  });

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContent}>
        <View style={styles.nameAndValue}>
          <Text style={styles.name}>{ticker}</Text>
          <View style={styles.valueHolder}>
            <Image source={require('../../assets/RUPEE.png')} style={styles.rupeeLogo}/>
            <Text style={styles.value}>437</Text>
          </View>
        </View>

        <Image source={require('../../assets/REMOVE.png')} style={styles.removeSymbol}/>
      </View>
    </View>
  );
}