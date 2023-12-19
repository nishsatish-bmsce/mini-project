import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  nav: {
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  navBg: {
    backgroundColor: '#3c3c3c',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  btnHolder: {
    width: 50,
    height: 50
  },

  backBtn: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain'
  },

  searchBtnHolder: {
    width: 30,
    height: 30
  },
});