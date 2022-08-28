import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.screenWrapper}>
      <Text>Hello, Home</Text>
    </View>
  );
};

HomeScreen.Name = 'Home';
HomeScreen.Title = 'Home Screen';

export default HomeScreen;
