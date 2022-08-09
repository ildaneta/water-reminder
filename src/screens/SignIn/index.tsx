import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import HeaderSVG from '../../assets/header.svg';
import OpenedEyeSVG from '../../assets/open-eye.svg';

import {styles} from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'SignIn'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const SignIn = ({navigation: {navigate}}: Props): JSX.Element => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View>
        <HeaderSVG />
      </View>

      <View style={styles.container}>
        <Text style={styles.title} label="Sign In" />
        <Text
          style={styles.description}
          label="Let's remind to drink water in a fun way?"
        />

        <Spacer top={48} />

        <Input label="E-mail" placeholder="Enter your e-mail" />

        <Spacer top={30} />

        <Input
          label="Password"
          placeholder="Enter your password"
          icon={<OpenedEyeSVG />}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.containerButtonLinkPassword}
          activeOpacity={0.8}
          onPress={() => navigate('RecoveryPassword')}>
          <Text
            style={[styles.link, styles.linkPassword]}
            label="Forgot Password?"
          />
        </TouchableOpacity>

        <Spacer top={60} />

        <Button label="Login" />

        <View style={styles.containerButtonRegister}>
          <Text label="Don't have an account?" style={styles.titleRegister} />

          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text label="Register" style={[styles.link, styles.linkRegister]} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
