import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorRoutes} from './tabNavigatorRoutes';
import FlightsNavigator from '../flightsTab/FlightsNavigator';
import {PlaneIcon} from '../../assets';

const Tabs = createBottomTabNavigator();
const PlaneIconComponent = () => <PlaneIcon />;
const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={TabNavigatorRoutes.FlightNavigator}
        component={FlightsNavigator}
        options={{
          tabBarIcon: PlaneIconComponent,
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
