import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  stockStat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center'
  },

  statTitle: {
    color: 'white',
    fontFamily: 'Monty-SB',
    fontSize: 24
  },

  statValue: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Monty-Light'
  },
});