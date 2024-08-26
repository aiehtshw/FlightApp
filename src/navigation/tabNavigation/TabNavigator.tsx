import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorRoutes} from './tabNavigatorRoutes';
import FlightsNavigator from '../flightsTab/FlightsNavigator';
import {Colors} from '../../utils/colors';
import {LocalizedString} from '../../utils/languages';
import {
  ActiveCalendarHeartIcon,
  ActivePlaneIcon,
  ActiveUserIcon, PassiveCalendarHeartIcon, PassivePlaneIcon, PassiveUserIcon,
} from '../../assets';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  const chooseIcon = (routeName: TabNavigatorRoutes, focused: boolean) => {
    switch (routeName) {
      case TabNavigatorRoutes.FlightNavigator:
        return focused ? <ActivePlaneIcon /> : <PassivePlaneIcon />;
      case TabNavigatorRoutes.MeNavigator:
        return focused ? <ActiveUserIcon /> : <PassiveUserIcon />;
      case TabNavigatorRoutes.PlansNavigator:
        return focused ? <ActiveCalendarHeartIcon /> : <PassiveCalendarHeartIcon />;
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
          tabBarIcon: ({focused}) =>
            chooseIcon(TabNavigatorRoutes.PlansNavigator, focused),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={TabNavigatorRoutes.FlightNavigator}
        component={FlightsNavigator}
        options={{
          title: LocalizedString.FlightNavigator,
          tabBarIcon: ({focused}) =>
            chooseIcon(TabNavigatorRoutes.FlightNavigator, focused),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name={TabNavigatorRoutes.MeNavigator}
        component={FlightsNavigator}
        options={{
          title: LocalizedString.MeNavigator,
          tabBarIcon: ({focused}) =>
            chooseIcon(TabNavigatorRoutes.MeNavigator, focused),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
