import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthProviderProps {
  children: ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

interface RecoveryPasswordData {
  email: string;
}

interface IUser {
  id: string;
  username: string;
}

interface AuthContextData {
  signIn: ({email, password}: SignInData) => Promise<void>;
  signUp: ({username, email, password}: SignUpData) => Promise<void>;
  recoveryPassword: ({email}: RecoveryPasswordData) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  user: IUser | null;
}

const USER_COLLECTION = '@waterreminder:users';

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const signUp = async ({username, email, password}: SignUpData) => {
    if (!username || !email || !password) {
      return Alert.alert(
        'SignUp',
        'Enter username, e-mail and password to create your account.',
      );
    }

    if (password.length < 6) {
      return Alert.alert(
        'SignUp',
        'A senha nao pode ser menor que 6 caracteres',
      );
    }

    try {
      setIsLoading(true);
      await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(account => {
          const {uid} = account.user;

          firestore()
            .collection('users')
            .doc(uid)
            .set({
              id: uid,
              username,
            })
            .then(() => {
              Alert.alert('SignUp', 'Account created with sucess!', [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('SignIn'),
                },
              ]);
            });

          setIsLoading(false);
        })
        .catch(error => {
          const {code} = error;

          if (code === 'auth/email-already-in-use') {
            return Alert.alert('SignUp', 'E-mail is already in use');
          }
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {}
  };

  const signIn = async ({email, password}: SignInData) => {
    if (!email || !password) {
      return Alert.alert('SignIn', 'E-mail and password is required.');
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const {uid} = response.user;
        firestore()
          .collection('users')
          .doc(uid)
          .get()
          .then(async profile => {
            const {id, username} = profile.data() as IUser;

            if (profile.exists) {
              const userData = {
                id,
                username,
              };

              setUser(userData);

              AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
              navigation.navigate('Home');
            }

            setIsLoading(false);
          });
      })
      .catch(error => {
        console.log('Erro: ', error);

        const {code} = error;

        if (code === 'auth/wrong-password') {
          return Alert.alert(
            'SignIn',
            'The password is invalid or the user does not have a password.',
          );
        }

        if (code === 'auth/user-not-found') {
          Alert.alert(
            'SignIn',
            'There is no user record corresponding to this e-mail.',
          );
        }
      })
      .finally(() => setIsLoading(false));
  };

  const signOut = async () => {
    setIsLoading(true);
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
    setIsLoading(false);

    navigation.navigate('SignIn');
  };

  const recoveryPassword = async ({email}: RecoveryPasswordData) => {
    if (!email) {
      return Alert.alert('Recovery password', 'E-mail is required.');
    }

    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Recovery password',
          'We have sent a link to your email to reset your password.',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('SignIn'),
            },
          ],
        );
      })
      .catch(error => {
        const {code} = error;

        if (code === 'auth/user-not-found') {
          Alert.alert(
            'Recovery password',
            'It was not possible to send the password reset to your e-mail, because the e-mail you entered was not registered.',
          );
        }
      });
  };

  const loadUserStorageData = async () => {
    setIsLoading(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as IUser;
      console.log('Existe user?', userData.id);
      navigation.navigate('Home');

      setUser(userData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{signUp, signIn, signOut, recoveryPassword, isLoading, user}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export {AuthProvider, useAuth};
