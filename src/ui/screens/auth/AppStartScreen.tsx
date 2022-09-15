import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const AppStartScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Norwich Social</Text>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default AppStartScreen;
