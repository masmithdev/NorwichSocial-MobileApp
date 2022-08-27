import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import DummyScreen from '../screens/DummyScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={DummyScreen} />
      <Tab.Screen name="Explore" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
