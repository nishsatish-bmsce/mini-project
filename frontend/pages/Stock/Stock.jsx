import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Navbar } from "../../components/navbar/Navbar";
import styles from './StockStyle';
import { useFonts } from 'expo-font';
import { StatComponent as Stat } from "../../components/Stat/Stat";

export const StockPage = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
    'Monty-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Monty-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
  });

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  const dummy = [
    {title: 'Market Cap', value: '4123 Cr'},
    {title: 'P/E Ratio', value: '23'},
    {title: 'ROCE', value: '18.21%'},
    {title: 'ROC', value: '19.40%'},
  ];
  return (
    <ScrollView style={styles.stockBg}>
      <Navbar nav={navigation}></Navbar>

      <View style={styles.mainStockInfo}>
        <Text style={styles.stockName}>ITC Ltd.</Text>
        <Text style={styles.stockIndex}>Index: BSE</Text>

        <View style={styles.stockValue}>
          <Image source={require('../../assets/RUPEE.png')} style={styles.rupeeIcon}/>
          <Text style={styles.stockPrice}>437</Text>
          <View style={styles.percentAndCaret}>
            <Text style={styles.percent}>-0.18%</Text>
            <Image source={require('../../assets/DOWN.png')} style={styles.caret}/>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.addBtn}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>

        <Image source={require('../../assets/LINE.png')} style={styles.line}/>
      </View>

      <View style={styles.numbers}>
        <Stat title='Market Cap' value='4213 Cr' style={styles.number}/>
        <Stat title='P/E Ratio' value='42' style={styles.number} />
        <Stat title='ROCE' value='4213' style={styles.number} />
        <Stat title='ROE' value='4213' style={styles.number} />
      </View>
    </ScrollView>
  )
}