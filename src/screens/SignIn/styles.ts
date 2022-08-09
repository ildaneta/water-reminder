import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    position: 'relative',
    top: -20,
  },

  title: {
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 28,
    color: '#222',
  },

  description: {
    fontFamily: 'Baloo2-Regular',
    fontSize: 18,
    color: '#222',
  },

  link: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  linkPassword: {
    color: '#222',
  },

  linkRegister: {
    color: '#097D6B',
    paddingLeft: 5,
  },

  titleRegister: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 16,
    color: '#222',
  },

  containerButtonLinkPassword: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'flex-end',
  },

  containerButtonRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
});
