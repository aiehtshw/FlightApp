import React from 'react';
import Background from '../../../components/background';
import EmptyCard from './components/emptyCard';
import {View} from 'react-native';
import styles from './styles';

const Dashboard = () => {
  const onAddFlightPressed = () => {
    console.log('Add Flight Pressed');
  };
  return (
    <Background>
      <View style={styles.container}>
        <EmptyCard onPress={onAddFlightPressed} />
      </View>
    </Background>
  );
};

export default Dashboard;
