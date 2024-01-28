import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  container: {
    width: 308,
    height: 106,
    backgroundColor: '#3c3c3c',
    padding: 15,
    borderRadius: 8
  },

  itemContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  nameAndValue: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "left",
    gap: 10
  },

  name: {
    fontFamily: 'Monty-Black',
    fontSize: 22,
    color: 'white',
    opacity: 0.8
  },

  valueHolder: {
    flexDirection: "row",

  },

  date: {
    fontFamily: 'Monty-M',
    fontSize: 16,
    color: 'white',
    opacity: 0.8
  },

  rupeeLogo: {
    width: 11,
    height: 16,
    marginTop: 5
  },

  value: {
    fontFamily: 'Monty-Black',
    fontSize: 35,
    color: 'white'
  },

  removeSymbol: {
    width: 32.68,
    height: 53
  }
});