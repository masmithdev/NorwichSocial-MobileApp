import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BaseNavigator from './navigators/BaseNavigator';
import EventItemStoreProvider from './stores/EventItemStoreProvider';

const App = () => {
  return (
    <EventItemStoreProvider>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
    </EventItemStoreProvider>
  );
};

export default App;
