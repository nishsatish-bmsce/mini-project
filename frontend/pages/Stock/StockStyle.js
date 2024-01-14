import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  stockBg: {
    backgroundColor: '#1e1e1e',
    height: '100%'
  },

  mainStockInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 65,
  },

  stockName: {
    fontFamily: 'Monty-Bold',
    fontSize: 45,
    color: 'white'
  },

  stockIndex: {
    fontFamily: 'Monty-Light',
    fontSize: 15,
    color: 'white',
    marginTop: 10
  },

  stockValue: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40
  },

  rupeeIcon: {
    width: 33,
    height: 46,
    marginTop: 10
  },

  stockPrice: {
    fontSize: 100,
    color: 'white',
    fontFamily: 'Monty-Black',
    marginRight: 15
  },

  percentAndCaret: {
    display: 'flex',
    flexDirection: 'column',
    gap: -20,
    alignItems: 'center',
    marginTop: 45
  },

  caret: {
    width: 44,
    height: 70.4
  },

  percent: {
    fontFamily: 'Monty-Black',
    color: '#EB0000',
    fontSize: 20
  },

  addBtn: {
    width: 76,
    height: 30,
    backgroundColor: '#68c759',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 40
  },

  btnText: {
    color: 'white',
    fontFamily: 'Monty-Bold',
    fontSize: 20,
    textTransform: 'uppercase',
  },

  line: {
    marginTop: 60,
  },

  numbers: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 40,
    alignItems: 'center'
  },

  number: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});