import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./NavbarStyle";

export const Navbar = ({ nav }) => {
  const clickMe = () => {
    nav.goBack();
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
            <TouchableOpacity style={styles.searchBtnHolder}>
              <Image source={require('../../assets/SEARCH.png')} style={styles.backBtn}/>
            </TouchableOpacity>
            {/* User profile page */}
            {/* <Image /> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}