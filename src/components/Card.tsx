import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

const Card = ({ children, style }: Props) => {
  return <View style={[styles.main, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  main: {
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowRadius: 25,
    shadowOpacity: 0.25,
    borderRadius: 13,
    marginBottom: 20,
  },
});
