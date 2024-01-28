import { ScrollView, Text, View } from "react-native"
import { Navbar } from "../../components/navbar/Navbar";
import styles from "./WishlistStyle";
import {useFonts} from "expo-font";
import { WishlistItemComponent as Item } from "../../components/WishlistItem/WishlistItem";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserProfile } from "./GetUserProfile";
import { useState, useCallback, useEffect } from "react";
import { itemDeleter } from "./DeleteItem";

export const Wishlist = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

  const [username, setUsername] = useState('');
  const [wishlist, setWishlist] = useState([]);
  let profile;

  useFocusEffect(
    useCallback(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('JWT');
      if (!token) {
        navigation.navigate('LOGIN');
      }
      profile = await getUserProfile();
      setUsername(profile.me.username);
      setWishlist(profile.wishlistItems);
    }
    
    checkAuth();
  }, []));

  // useEffect(() => {}, [wishlist]);

  const logout = async () => {
    await AsyncStorage.removeItem('JWT');
    navigation.navigate('LOGIN')
  }

  const removeItemHandler = async (ticker) => {
    console.log(ticker);
    const token = await AsyncStorage.getItem('JWT');
    const message = await itemDeleter(token, ticker);
    console.log(message);
    if (message !== 'Success') {
      return;
    }
    setWishlist(wishlist => {
      const newList = wishlist.filter(item => item.ticker !== ticker);
      return newList;
    });
  }

  if (!loadedFonts) {
    return <Text>Yoyo mendez</Text>
  }
  return (
    <ScrollView style={styles.wishlistBg}>
      <Navbar nav={navigation}/>

      <View style={styles.headingHolder}>
        <Text style={styles.pageHeader}>My Watchlist</Text>
      </View>

      <View style={styles.authStatus}>
        <Text style={styles.user}>User: {username}</Text>
        <Text 
          style={[styles.user, styles.signout]}
          onPress={logout}>
            Signout
        </Text>
      </View>

      <View style={styles.wishlistItems}>
        {
          wishlist.length == 0 && <Text style={styles.noitems}>No items</Text>
        }
        {
          wishlist.map(item => {
            return <Item ticker={item.ticker} key={item.ticker} timestamp={item.createdAt} itemRemover={removeItemHandler}/> 
          })
        }
      </View>
    </ScrollView>
  );
}