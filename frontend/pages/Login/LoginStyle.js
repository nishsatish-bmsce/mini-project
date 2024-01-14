import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
  loginBg: {
    backgroundColor: '#3c3c3c',
    height: '100%'
  },

  loginFlex: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    marginTop: 110,
  },

  loginHeader: {
    fontFamily: 'Monty-EB',
    fontSize: 60,
    color: '#68c759'
  },

  form: {
    gap: 30,
    marginTop: 80
  },

  formInput: {
    height: 59,
    width: 272,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(159, 159, 159, 0.30)',
        shadowOffset: { width: 3, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
    textAlign: 'center',
    fontFamily: 'Monty-L',
    color: 'white',
    fontSize: 18
  },

  formSubmitter: {
    height: 40,
    width: 100,
    backgroundColor: '#68c759',
    borderRadius: 5,
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: 'white',
    fontFamily: 'Monty-B',
    textTransform: "uppercase",
    fontSize: 20
  }
});