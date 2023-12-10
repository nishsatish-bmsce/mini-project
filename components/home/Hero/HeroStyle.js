import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  hero: {
    position: 'relative',
    height: 580,
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
    padding: 50
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
  }
});