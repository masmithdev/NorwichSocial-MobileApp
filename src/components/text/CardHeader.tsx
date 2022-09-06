import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useThemeStyles from '../../globals/useThemeStyles';

interface Props {
  children: string;
}

const CardHeader = ({ children }: Props) => {
  const themeStyles = useThemeStyles();

  return (
    <Text style={[styles.main, themeStyles.textSecondary]}>{children}</Text>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  main: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.15,
    lineHeight: 24,
    textTransform: 'uppercase',
    color: '#8a8a8d',
  },
});
