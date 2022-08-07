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
    backgroundColor: '#59F4DB',
    position: 'absolute',
    top: 7,
    left: 6,
  },

  containerInput: {
    flexDirection: 'row',
    backgroundColor: '#fdfdfd',
    height: 50,
    borderColor: '#111',
    borderWidth: 2,
    borderRadius: 9,
  },

  containerLabelText: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },

  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    width: '22%',
    marginRight: 5,
    marginLeft: 16,
    color: '#666',
    fontFamily: 'Baloo2-SemiBold',
    fontSize: 16,
  },

  input: {
    width: '70%',
    marginRight: 100,
    color: '#333',
    fontFamily: 'Baloo2-Medium',
    fontSize: 16,
  },
});
