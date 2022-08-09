import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import HeaderSVG from '../../assets/header.svg';
import OpenedEyeSVG from '../../assets/open-eye.svg';
import ArrowBackSVG from '../../assets/arrow-back.svg';

import {styles} from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'SignUp'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const SignUp = ({navigation}: Props): JSX.Element => {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.containerButtonLinkPassword}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
        <Text label="Sign In" style={styles.buttonBackText} />
      </View>

      <HeaderSVG />

      <View style={styles.container}>
        <Text style={styles.title} label="Sign Up" />
        <Text
          style={styles.description}
          label="Create your account and enjoy the app"
        />

        <Spacer top={48} />

        <Input label="Username" placeholder="Username" />

        <Spacer top={30} />

        <Input label="E-mail" placeholder="E-mail" />

        <Spacer top={30} />

        <Input
          label="Password"
          placeholder="Password"
          icon={<OpenedEyeSVG />}
        />

        <Spacer top={90} />

        <Button label="Create Account" />

        <Spacer bottom={10} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
