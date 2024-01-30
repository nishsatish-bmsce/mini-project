import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Navbar } from "../../components/navbar/Navbar";
import styles from './StockStyle';
import { useFonts } from 'expo-font';
import { StatComponent as Stat } from "../../components/Stat/Stat";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getStockInfo } from "./GetStock";
import { formatNumber } from "./FormatNumber";
import { checkIfItemIsWishlisted } from "./WishlistCheck";
import { addItemToWishlist } from "./AddItem";

export const StockPage = ({ navigation, route }) => {
  const [loadedFonts] = useFonts({
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
    'Monty-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Monty-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
  });
  const [financials, setFinancials] = useState({});
  const [canAdd, setCanAdd] = useState(true);


  const { ticker } = route.params;

  useFocusEffect(
    useCallback(() => {
      const getStock = async () => {
        console.log(ticker);
        const res = await getStockInfo(ticker);
        if (res.error) {
          navigation.navigate('HOME');
          return;
        }
        setFinancials(res);

        // Check if stock is already there in the user's wishlist
        const itemExists = await checkIfItemIsWishlisted(ticker);
        console.log(itemExists);
        setCanAdd(!itemExists);
      }

      getStock();
    }, [])
  );

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }

  let financialData = [
    {title: 'Current Assets', value: financials.currentAssets},
    {title: 'Current Liabilities', value: financials.currentLiabilities},
    {title: 'EPS', value: financials.earningPerShare ? financials.earningPerShare.toFixed(2) : financials.earningPerShare},
    // {title: 'EPS', value: financials.earningPerShare},
    {title: 'Total Assets', value: financials.totalAssets},
    {title: 'Total Liabilities', value: financials.totalLiabilities},
    {title: 'Working Capital', value: financials.workingCapital},
    {title: 'Long Term Debt', value: financials.longTermDebt},
  ];

  if (financials) {
    financialData = financialData.map(stat => {
      return {
        ...stat,
        value: formatNumber(stat.value, stat.title)
      }
    });    
  }

  const addToWishlist = async () => {
    console.log('hi');
    const res = await addItemToWishlist(ticker);
    console.log(res);
    navigation.navigate('WISHLIST');
  }

  return (
    <ScrollView style={styles.stockBg}>
      <Navbar nav={navigation}></Navbar>

      <View style={styles.mainStockInfo}>
        <Text style={styles.stockName}>{ticker.toUpperCase()}</Text>
        <Text style={styles.stockIndex}>Index: BSE</Text>

        <View style={styles.stockValue}>
          <Image source={require('../../assets/RUPEE.png')} style={styles.rupeeIcon}/>
          <Text style={styles.stockPrice}>{Math.floor(financials.price)}</Text>
          {/* <View style={styles.percentAndCaret}>
            <Text style={styles.percent}>-0.18%</Text>
            <Image source={require('../../assets/DOWN.png')} style={styles.caret}/>
  </View> */}
        </View>

        {
          canAdd &&
          <TouchableOpacity 
            style={styles.addBtn}
            onPress={() => addToWishlist()}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        }

        <Image source={require('../../assets/LINE.png')} style={styles.line}/>
      </View>

      <View style={styles.numbers}>
        {
          financialData.map(stat => <Stat title={stat.title} value={stat.value} key={stat.title}/>)
        }
      </View>
    </ScrollView>
  )
}