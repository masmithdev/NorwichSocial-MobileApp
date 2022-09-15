import React from 'react';
import { Button, Text, View } from 'react-native';
import { useApp } from '../providers/AppProvider';
import styles from './styles';

const HomeScreen = () => {
  const app = useApp();

  const handleLogout = async () => {
    await app.authStore.logOut();
  };

  return (
    <View style={styles.screenWrapper}>
      <Text>Hello, Home</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

HomeScreen.Name = 'Home';
HomeScreen.Title = 'Home Screen';

export default HomeScreen;
