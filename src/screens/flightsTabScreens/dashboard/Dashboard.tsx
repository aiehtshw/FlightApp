import React from 'react';
import Background from '../../../components/background';
import EmptyCard from './components/emptyCard';

const Dashboard = () => {
  const onAddFlightPressed = () => {
    console.log('Add Flight Pressed');
  };
  return (
    <Background>
      <EmptyCard onPress={onAddFlightPressed} />
    </Background>
  );
};

export default Dashboard;
