import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import Text from '../Text';

import {styles} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  isLoading: boolean;
}

const Button = ({label, isLoading, ...rest}: IButtonProps): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.doubleContainer} />
        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            disabled={isLoading}
            {...rest}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text label={label} style={styles.buttonLabel} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Button;
