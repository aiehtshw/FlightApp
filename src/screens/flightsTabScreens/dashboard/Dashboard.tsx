import React, {useEffect} from 'react';
import Background from '../../../components/background';
import EmptyCard from './components/emptyCard';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {
  addTicket,
  deleteTicket,
} from '../../../redux/reducers/ticket/ticketSlice';

const Dashboard = () => {
  const ticketState = useAppSelector(state => state.ticket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('ticket state', ticketState);
  }, [ticketState]);
  const onAddFlightPressed = () => {
    dispatch(
      addTicket({
        airlineCompany: 'asd',
        arrivalCity: 'asd',
        arrivalDate: 'asd',
        arrivalHour: 'asd',
        badgeText: 'asd',
        departureCity: 'asd',
        departureDate: 'asd',
        departureHour: 'asd',
        flightNumber: 'asd',
      }),
    );
  };
  const onDeleteFlightPressed = () => {
    dispatch(deleteTicket('asd'));
  };
  return (
    <Background>
      <View style={styles.container}>
        <EmptyCard onPress={onAddFlightPressed} />
        <TouchableOpacity onPress={onDeleteFlightPressed}>
          <Text>delete</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Dashboard;
