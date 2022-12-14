import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BaseNavigator from './ui/navigators/BaseNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  );
};

export default App;
