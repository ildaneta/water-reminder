import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 30,
    paddingHorizontal: 16,
  },

  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  greeting: {
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 24,
    color: '#222',
  },

  userName: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 22,
    color: '#333',
  },

  signOut: {
    fontFamily: 'Baloo2-Medium',
    fontSize: 10,
    color: '#F00D0D',
  },

  containerGreetingSignOut: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerIllustration: {
    alignSelf: 'center',
    paddingTop: '30%',
  },

  containerButtonSignOut: {
    alignItems: 'center',
  },
});
