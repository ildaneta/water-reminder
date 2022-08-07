import React from 'react';
import {Text as TextRN, TextProps} from 'react-native';

interface ITextProps extends TextProps {
  label: string;
}

const Text = ({label, ...rest}: ITextProps): JSX.Element => {
  return <TextRN {...rest}>{label}</TextRN>;
};

export default Text;
