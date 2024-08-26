import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PlansNavigatorRoutes} from './PlansNavigatorRoutes';
import Plans from '../../screens/plansTabScreens/plans/Plans';

const Stack = createNativeStackNavigator();

const PlansNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={PlansNavigatorRoutes.Plans}>
      <Stack.Screen
        name={PlansNavigatorRoutes.Plans}
        component={Plans}
        options={{title: 'Plans'}}
      />
    </Stack.Navigator>
  );
};

export default PlansNavigator;
