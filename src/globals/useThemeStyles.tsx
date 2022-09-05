import { StyleSheet, TextStyle, useColorScheme, ViewStyle } from 'react-native';

const useThemeStyles = () => {
  const colorScheme = useColorScheme();
  if (colorScheme === 'dark') {
    return darkStyles();
  }
  return lightStyles();
};

export default useThemeStyles;

type ThemeStyles = {
  backgroundPrimary: ViewStyle;
  backgroundCard: ViewStyle;
  textPrimary: TextStyle;
  textSecondary: TextStyle;
};

let _lightStyles: ThemeStyles;
function lightStyles() {
  if (!_lightStyles) {
    _lightStyles = StyleSheet.create<ThemeStyles>({
      textPrimary: {
        color: '#000',
      },
      textSecondary: {
        color: '#8a8a8d',
      },
      backgroundPrimary: {
        backgroundColor: '#fff',
      },
      backgroundCard: {
        backgroundColor: '#fff',
      },
    });
  }
  return _lightStyles;
}

let _darkStyles: ThemeStyles;
function darkStyles() {
  if (!_darkStyles) {
    _darkStyles = StyleSheet.create<ThemeStyles>({
      textPrimary: {
        color: '#fff',
      },
      textSecondary: {
        color: '#8d8d92',
      },
      backgroundPrimary: {
        backgroundColor: '#000',
      },
      backgroundCard: {
        backgroundColor: '#1c1c1d',
      },
    });
  }
  return _darkStyles;
}
