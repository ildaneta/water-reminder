import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: '#fdfdfd', flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
    </SafeAreaView>
  );
};

export default App;
