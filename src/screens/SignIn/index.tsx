import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import {styles} from './styles';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'SignIn'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const SignIn = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
