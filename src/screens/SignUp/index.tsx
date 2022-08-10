import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import HeaderSVG from '../../assets/header.svg';
import OpenedEyeSVG from '../../assets/opened-eye.svg';
import ClosedEyeSVG from '../../assets/closed-eye.svg';
import ArrowBackSVG from '../../assets/arrow-back.svg';

import {styles} from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';
import {useAuth} from '../../hooks/auth';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'SignUp'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const SignUp = ({navigation}: Props): JSX.Element => {
  const {signUp, isLoading} = useAuth();
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const handleSignUp = () => {
    signUp({username, email, password});
  };

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

        <Input
          label="Username"
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setUsername}
        />

        <Spacer top={30} />

        <Input
          label="E-mail"
          placeholder="E-mail"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <Spacer top={30} />

        <Input
          label="Password"
          placeholder="Password"
          icon={securePassword ? <ClosedEyeSVG /> : <OpenedEyeSVG />}
          iconPress={() => setSecurePassword(!securePassword)}
          secureTextEntry={securePassword}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setPassword}
        />

        <Spacer top={90} />

        <Button
          label="Create Account"
          onPress={handleSignUp}
          isLoading={isLoading}
        />

        <Spacer bottom={10} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
