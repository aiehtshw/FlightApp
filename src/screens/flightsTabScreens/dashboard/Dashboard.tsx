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
import TicketItem from './components/ticketItem';
import {generateTicket} from '../../../utils/helpers/ticketHelpers';

const Dashboard = () => {
  const ticketState = useAppSelector(state => state.ticket);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('ticket state', ticketState);
  }, [ticketState]);
  const onAddFlightPressed = () => {
    dispatch(addTicket(generateTicket()));
  };
  const onDeleteFlightPressed = () => {
    dispatch(deleteTicket('asd'));
  };
  return (
    <Background>
      {ticketState.tickets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyCard onPress={onAddFlightPressed} />
          <TouchableOpacity onPress={onDeleteFlightPressed}>
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ticketState.tickets.map((item, index) => (
          <TicketItem
            airlineCompany={''}
            arrivalCity={''}
            arrivalDate={''}
            arrivalHour={''}
            badgeText={''}
            departureCity={''}
            departureDate={''}
            departureHour={''}
            flightNumber={''}
          />
        ))
      )}
    </Background>
  );
};

export default Dashboard;
