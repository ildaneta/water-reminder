import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import Text from '../Text';

import {styles} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  type: 'rectangular' | 'link';
  color?: 'green' | 'black';
}

const Button = ({
  label,
  type,
  color = 'black',
  ...rest
}: IButtonProps): JSX.Element => {
  const customButtonColor = color === 'black' ? '#222' : '#097D6B';

  const externalStyle = StyleSheet.create({
    buttonLabel: {
      color: customButtonColor,
    },

    buttonLink: {
      borderBottomColor: customButtonColor,
      borderBottomWidth: 1,
    },
  });
  return (
    <>
      {type === 'rectangular' ? (
        <View style={styles.container}>
          <View style={styles.doubleContainer} />
          <View style={styles.containerButton}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              {...rest}>
              <Text label={label} style={styles.buttonLabel} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity style={externalStyle.buttonLink} {...rest}>
          <Text
            style={[styles.buttonLabelLink, externalStyle.buttonLabel]}
            label={label}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
