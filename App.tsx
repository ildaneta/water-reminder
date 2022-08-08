import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fdfdfd" barStyle="dark-content" />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{backgroundColor: '#fdfdfd', flex: 1}}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
