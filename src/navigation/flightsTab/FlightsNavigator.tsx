import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlightNavigatorRoutes} from './flightNavigatorRoutes';
import Dashboard from '../../screens/flightsTabScreens/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={FlightNavigatorRoutes.Dashboard}>
      <Stack.Screen
        name={FlightNavigatorRoutes.Dashboard}
        component={Dashboard}
        options={{title: 'Flights'}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
