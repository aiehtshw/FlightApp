import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MeNavigatorRoutes} from './meNavigatorRoutes';
import Me from '../../screens/meTabScreens/me/Me';
import CustomHeader from '../../components/headers/customHeader';
import {LocalizedString} from '../../utils/languages';

const Stack = createNativeStackNavigator();

const MeNavigator = () => {
  const customHeader = () => {
    return <CustomHeader title={LocalizedString.FlightNavigator} />;
  };
  return (
    <Stack.Navigator initialRouteName={MeNavigatorRoutes.Me}>
      <Stack.Screen
        name={MeNavigatorRoutes.Me}
        component={Me}
        options={{
          header: customHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default MeNavigator;
