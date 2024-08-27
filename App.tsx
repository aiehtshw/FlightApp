import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Root from './src/navigation/root';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import TicketHighLightModal from './src/components/ticketHighLightModal';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Root />
          <TicketHighLightModal />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
