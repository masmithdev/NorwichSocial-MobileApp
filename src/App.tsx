import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BaseNavigator from './navigators/BaseNavigator';
import StoreProvider from './stores/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
