import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './stack.routes';
import {AuthProvider} from '../hooks/auth';

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Routes;
