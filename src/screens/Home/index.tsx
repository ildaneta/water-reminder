import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import SignOutSVG from '../../assets/signOut.svg';
import WelcomeSVG from '../../assets/welcome-illustration.svg';
import {useAuth} from '../../hooks/auth';

const Home = (): JSX.Element => {
  const {signOut, isLoading} = useAuth();
  return (
    <>
      {isLoading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator color="#59F4DB" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.containerGreetingSignOut}>
            <Text style={styles.greeting}>
              Welcome, <Text style={styles.userName}>Ilda</Text>
            </Text>

            <View>
              <TouchableOpacity
                style={styles.containerButtonSignOut}
                onPress={signOut}>
                <SignOutSVG />
              </TouchableOpacity>
              <Text style={styles.signOut}>SignOut</Text>
            </View>
          </View>

          <View style={styles.containerIllustration}>
            <WelcomeSVG />
          </View>
        </View>
      )}
    </>
  );
};

export default Home;
