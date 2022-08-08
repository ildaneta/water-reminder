import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RecoveryPassword from '../screens/RecoveryPassword';

export type StackRoutes = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  RecoveryPassword: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<StackRoutes>();

const routes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="RecoveryPassword" component={RecoveryPassword} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default routes;
