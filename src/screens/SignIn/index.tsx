import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StackRoutes} from '../../routes/stack.routes';

import HeaderSVG from '../../assets/header.svg';
import OpenedEyeSVG from '../../assets/opened-eye.svg';
import ClosedEyeSVG from '../../assets/closed-eye.svg';

import {styles} from './styles';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Spacer from '../../components/Spacer';
import {useAuth} from '../../hooks/auth';
import {useFocusEffect} from '@react-navigation/native';

type SignScreenNavigationProp = NativeStackNavigationProp<
  StackRoutes,
  'SignIn'
>;

type Props = {
  navigation: SignScreenNavigationProp;
};

const SignIn = ({navigation: {navigate}}: Props): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const {signIn, isLoading} = useAuth();

  const handleSignIn = () => {
    signIn({email, password});
  };

  useFocusEffect(
    useCallback(() => {
      setEmail('');
      setPassword('');
    }, []),
  );

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

        <Input
          label="E-mail"
          value={email}
          placeholder="Enter your e-mail"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <Spacer top={30} />

        <Input
          label="Password"
          placeholder="Enter your password"
          icon={securePassword ? <ClosedEyeSVG /> : <OpenedEyeSVG />}
          value={password}
          iconPress={() => setSecurePassword(!securePassword)}
          secureTextEntry={securePassword}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setPassword}
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

        <Button label="Login" isLoading={isLoading} onPress={handleSignIn} />

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
