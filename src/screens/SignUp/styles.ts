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

  buttonBackText: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 18,
    color: '#222',
    marginLeft: 16,
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
    fontSize: 18,
    color: '#222',
    textDecorationLine: 'underline',
  },

  containerButtonLinkPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 26,
    paddingLeft: 16,
  },
});
