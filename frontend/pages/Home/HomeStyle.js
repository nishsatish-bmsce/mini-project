import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  blackBg: {
    backgroundColor: '#1e1e1e',
    height: '100%'
  },

  authLinks: {
    display: 'flex',
    flexDirection: 'row',
    gap: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  },

  authLink: {
    fontFamily: 'Monty-Light',
    fontSize: 26,
  },

  login: {
    color: 'white'
  },

  signup: {
    color: '#68c759'
  }
})