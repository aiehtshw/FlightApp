import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MeNavigatorRoutes} from './meNavigatorRoutes';
import Me from '../../screens/meTabScreens/me/Me';
import CustomHeader from '../../components/headers/customHeader';
import {LocalizedString} from '../../utils/languages';

const Stack = createNativeStackNavigator();

const MeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={MeNavigatorRoutes.Me}>
      <Stack.Screen
        name={MeNavigatorRoutes.Me}
        component={Me}
        options={{
          header: () => {
            return <CustomHeader title={LocalizedString.MeNavigator} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MeNavigator;
