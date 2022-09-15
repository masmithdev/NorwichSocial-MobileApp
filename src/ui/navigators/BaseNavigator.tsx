import React, { ReactNode, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import AppStartScreen from '../screens/auth/AppStartScreen';
import { useApp } from '../providers/AppProvider';
import { observer } from 'mobx-react-lite';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const BaseNavigator = observer(() => {
  const app = useApp();

  useEffect(() => {
    const init = async () => {
      await app.authStore.init();
    };
    init();
  }, [app]);

  let screens: ReactNode;

  if (
    app.authStore.status === 'initialising' ||
    app.authStore.status === 'none'
  ) {
    screens = (
      <Stack.Screen
        name="AppStart"
        component={AppStartScreen}
        initialParams={{ status: 'Hello' }}
        options={{ headerShown: false }}
      />
    );
  } else if (app.authStore.status === 'loggedIn') {
    screens = (
      <Stack.Screen
        name="AppTabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          animation: 'simple_push',
        }}
      />
    );
  } else {
    screens = (
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      />
    );
  }

  return <Stack.Navigator>{screens}</Stack.Navigator>;
});

export default BaseNavigator;
