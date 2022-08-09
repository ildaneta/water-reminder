import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import HeaderSVG from '../../assets/header.svg';
import ArrowBackSVG from '../../assets/arrow-back.svg';

import {styles} from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'RecoveryPassword'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const RecoveryPassword = ({navigation}: Props): JSX.Element => {
  return (
    <>
      <View style={styles.containerButtonLinkPassword}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSVG />
        </TouchableOpacity>
        <Text label="Sign In" style={styles.buttonBackText} />
      </View>

      <HeaderSVG />

      <View style={styles.container}>
        <Text style={styles.title} label="Recovery Password" />
        <Text
          style={styles.description}
          label="Don't worry, we'll send you an e-mail to recovery your password."
        />

        <Spacer top={48} />

        <Input label="E-mail" placeholder="Enter your e-mail" />

        <Spacer top={30} />

        <Button label="Send " />
      </View>
    </>
  );
};

export default RecoveryPassword;
