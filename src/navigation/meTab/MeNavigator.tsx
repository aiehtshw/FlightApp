import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MeNavigatorRoutes} from './meNavigatorRoutes';
import Me from '../../screens/meTabScreens/me/Me';

const Stack = createNativeStackNavigator();

const MeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MeNavigatorRoutes.Me}>
      <Stack.Screen
        name={MeNavigatorRoutes.Me}
        component={Me}
        options={{title: 'Me'}}
      />
    </Stack.Navigator>
  );
};

export default MeNavigator;
