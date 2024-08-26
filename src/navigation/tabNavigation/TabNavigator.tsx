import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorRoutes} from './tabNavigatorRoutes';
import FlightsNavigator from '../flightsTab/FlightsNavigator';
import {CalendarHeartIcon, PlaneIcon, UserIcon} from '../../assets';
import {Colors} from '../../utils/colors';
import {LocalizedString} from '../../utils/languages';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  const chooseIcon = (routeName: TabNavigatorRoutes) => {
    switch (routeName) {
      case TabNavigatorRoutes.FlightNavigator:
        return <PlaneIcon />;
      case TabNavigatorRoutes.MeNavigator:
        return <UserIcon />;
      case TabNavigatorRoutes.PlansNavigator:
        return <CalendarHeartIcon />;
    }
  };
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.Gray900,
      }}
      initialRouteName={TabNavigatorRoutes.FlightNavigator}>
      <Tabs.Screen
        name={TabNavigatorRoutes.PlansNavigator}
        component={FlightsNavigator}
        options={{
          title: LocalizedString.PlansNavigator,
          tabBarIcon: () => chooseIcon(TabNavigatorRoutes.PlansNavigator),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={TabNavigatorRoutes.FlightNavigator}
        component={FlightsNavigator}
        options={{
          title: LocalizedString.FlightNavigator,
          tabBarIcon: () => chooseIcon(TabNavigatorRoutes.FlightNavigator),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={TabNavigatorRoutes.MeNavigator}
        component={FlightsNavigator}
        options={{
          title: LocalizedString.MeNavigator,
          tabBarIcon: () => chooseIcon(TabNavigatorRoutes.MeNavigator),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
