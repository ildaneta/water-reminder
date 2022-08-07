import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import {styles} from './styles';

interface IInputProps extends TextInputProps {
  label: string;
  icon?: React.ReactNode;
  iconPress?: () => void;
}

const Input = ({icon, label, iconPress, ...rest}: IInputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.doubleContainer} />
      <View style={styles.containerInput}>
        <View style={styles.containerLabelText}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#777"
            {...rest}
          />
        </View>

        {icon && (
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.8}
            onPress={iconPress}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
