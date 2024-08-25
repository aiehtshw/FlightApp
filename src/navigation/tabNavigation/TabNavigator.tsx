import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorRoutes} from './tabNavigatorRoutes';
import FlightsNavigator from '../flightsTab/FlightsNavigator';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={TabNavigatorRoutes.FlightNavigator}
        component={FlightsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
