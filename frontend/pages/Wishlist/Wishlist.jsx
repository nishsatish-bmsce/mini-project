import { ScrollView, Text, View } from "react-native"
import { Navbar } from "../../components/navbar/Navbar";
import styles from "./WishlistStyle";
import {useFonts} from "expo-font";
import { WishlistItemComponent as Item } from "../../components/WishlistItem/WishlistItem";

export const Wishlist = ({ navigation }) => {
  const [loadedFonts] = useFonts({
    'Monty-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
    'Monty-Light': require('../../assets/fonts/Montserrat-Light.ttf')
  });

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
        <Text style={styles.user}>User: hello</Text>
        <Text 
          style={[styles.user, styles.signout]}
          onPress={() => { navigation.navigate('LOGIN') }}>
            Signout
        </Text>
      </View>

      <View style={styles.wishlistItems}>
        <Item ticker='ITC Ltd.'/> 
        <Item ticker='PZN'/>
        <Item ticker='HDFC Ltd.'/>
        <Item ticker='ADANI'/>
      </View>
    </ScrollView>
  );
}