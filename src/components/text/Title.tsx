import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useThemeStyles from '../../globals/useThemeStyles';

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  const themeStyles = useThemeStyles();

  return <Text style={[styles.main, themeStyles.textPrimary]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  main: {
    fontSize: 34,
    fontWeight: 'bold',
    letterSpacing: 0.34,
    lineHeight: 55,
    marginBottom: 10,
  },
});
