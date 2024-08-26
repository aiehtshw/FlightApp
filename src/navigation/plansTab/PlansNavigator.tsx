import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PlansNavigatorRoutes} from './PlansNavigatorRoutes';
import Plans from '../../screens/plansTabScreens/plans/Plans';
import CustomHeader from '../../components/headers/customHeader';
import {LocalizedString} from '../../utils/languages';

const Stack = createNativeStackNavigator();

const PlansNavigator = () => {
  const customHeader = () => {
    return <CustomHeader title={LocalizedString.PlansNavigator} />;
  };
  return (
    <Stack.Navigator initialRouteName={PlansNavigatorRoutes.Plans}>
      <Stack.Screen
        name={PlansNavigatorRoutes.Plans}
        component={Plans}
        options={{
          header: customHeader,
        }}
      />
    </Stack.Navigator>
  );
};

export default PlansNavigator;
