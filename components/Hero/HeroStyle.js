import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  hero: {
    position: 'relative',
    height: 600,
    overflow: 'hidden',
    width: '100%',
    display: 'inline-block',
    padding: 0
  },

  bg: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1
  },

  heroContents: {
    padding: 50,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },

  logoHolder: {
    width: 300,
    height: 150,
    marginTop: 90
  },

  logo: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },

  tagline: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-Light',
    fontSize: 35,
    textTransform: 'capitalize'
  },

  searchBar: {
    marginTop: 80,
    height: 50,
    width: 272,
    backgroundColor: 'white',
    borderRadius: 17,
    fontFamily: 'Montserrat-Light',
    padding: 10,
    fontSize: 15
  }
});