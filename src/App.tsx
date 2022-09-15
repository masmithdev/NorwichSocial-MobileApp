import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BaseNavigator from './ui/navigators/BaseNavigator';
import AppProvider from './ui/providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
