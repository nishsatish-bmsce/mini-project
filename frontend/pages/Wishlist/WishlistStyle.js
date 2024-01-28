import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  wishlistBg: {
    backgroundColor: '#1e1e1e',
    height: '100%'
  },

  headingHolder: {
    width: '100%',
    textAlign: 'center',
    marginTop: 55
  },


  noitems: {
    color: 'white'
  },

  pageHeader: {
    fontFamily: 'Monty-Black',
    fontSize: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },

  wishlistItems: {
    gap: 30,
    marginTop: 40,
    alignItems: "center"
  },

  authStatus: {
    flexDirection: 'row',
    gap: 90,
    justifyContent: 'center',
    marginTop: 20
  },

  user: {
    color: 'white',
    fontFamily: 'Monty-Light',
    fontSize: 20
  },

  signout: {
    color: '#68c759'
  }
});