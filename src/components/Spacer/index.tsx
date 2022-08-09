import React from 'react';
import {View, StyleSheet} from 'react-native';

interface ISpacerProps {
  top?: number;
  bottom?: number;
}

const Spacer = ({top, bottom}: ISpacerProps): JSX.Element => {
  const styles = StyleSheet.create({
    spacer: {
      paddingTop: top,
      paddingBottom: bottom,
    },
  });

  return <View style={styles.spacer} />;
};

export default Spacer;
