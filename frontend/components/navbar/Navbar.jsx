import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./NavbarStyle";

export const Navbar = ({ nav }) => {
  const clickMe = () => {
    nav.goBack();
  }

  const wishlistIconClick = async () => {
    const token = await AsyncStorage.getItem('JWT');
    if (token) {
      nav.navigate('WISHLIST');
    } else {
      nav.navigate('LOGIN')
    }
  }
  return (
    <SafeAreaView style={styles.navBg}>
      <View style={styles.nav}>
        <View style={styles.leftEnd}>
          <TouchableOpacity style={styles.btnHolder} onPress={clickMe}>
            <Image source={require('../../assets/BACK.png')} style={styles.backBtn}/>
          </TouchableOpacity>
        </View>

        <View style={styles.rightEnd}>
          <View style={styles.rightGroup}>
            <TouchableOpacity 
              style={styles.searchBtnHolder}
              onPress={() => {nav.navigate('HOME')}}>
              <Image source={require('../../assets/SEARCH.png')} style={styles.backBtn}/>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.listIconHolder}
              onPress={() => wishlistIconClick()}>
              <Image source={require('../../assets/LIST.png')} style={styles.listIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}