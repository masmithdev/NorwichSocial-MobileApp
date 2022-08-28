import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BaseNavigator from './navigators/BaseNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  );
};

export default App;
