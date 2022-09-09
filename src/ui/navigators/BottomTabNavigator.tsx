import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ExploreNavigator from './ExploreNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="ExploreNavigator"
        component={ExploreNavigator}
        options={{ title: 'Explore' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
