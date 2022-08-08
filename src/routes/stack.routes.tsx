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
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default routes;
