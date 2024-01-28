import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./WishlistItemStyle";
import { useFonts } from "expo-font";
import { processDate } from "./DateHandler";

export const WishlistItemComponent = ({ ticker, timestamp, itemRemover }) => {
  const [loadedFonts] = useFonts({
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Monty-M': require('../../assets/fonts/Montserrat-Medium.ttf')
  });

  const [date, month, year] = processDate(timestamp);

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }
  return (
    <View style={styles.container}>
      <View style={styles.itemContent}>
        <View style={styles.nameAndValue}>
          <Text style={styles.name}>{ticker}</Text>
          <View style={styles.valueHolder}>
          <Text style={styles.date}>Added On: {date}/{month}/{year}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => itemRemover(ticker)}>
          <Image source={require('../../assets/REMOVE.png')} style={styles.removeSymbol}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}