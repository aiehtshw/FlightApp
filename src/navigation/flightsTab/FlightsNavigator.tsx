import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FlightNavigatorRoutes} from './flightNavigatorRoutes';
import Dashboard from '../../screens/flightsTabScreens/dashboard/Dashboard';
import CustomHeader from '../../components/headers/customHeader';
import {LocalizedString} from '../../utils/languages';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const customHeader = () => {
    return <CustomHeader title={LocalizedString.FlightNavigator} />;
  };
  return (
    <Stack.Navigator initialRouteName={FlightNavigatorRoutes.Dashboard}>
      <Stack.Screen
        name={FlightNavigatorRoutes.Dashboard}
        component={Dashboard}
        options={{
          header: customHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
