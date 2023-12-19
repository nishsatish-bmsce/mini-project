import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import styles from './StatStyle';

export const StatComponent = ({ title, value }) => {
  const [loadedFonts] = useFonts({
    'Monty-SB': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  return (
    <View style={styles.stockStat}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}