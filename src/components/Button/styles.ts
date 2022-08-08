import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 6,
  },

  doubleContainer: {
    width: '100%',
    height: 50,
    borderColor: '#111',
    borderWidth: 2,
    paddingHorizontal: 16,
    borderRadius: 9,
    backgroundColor: '#fdfdfd',
    position: 'absolute',
    top: 7,
    left: 6,
  },

  containerButton: {
    flexDirection: 'row',
    backgroundColor: '#59F4DB',
    height: 50,
    borderColor: '#111',
    borderWidth: 2,
    borderRadius: 9,
  },

  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLabel: {
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16,
    color: '#222',
  },

  buttonLabelLink: {
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16,
  },
});
