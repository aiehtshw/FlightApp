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

  const onAddFlightPressed = () => {
    dispatch(addTicket(generateTicket()));
  };

  return (
    <Background>
      {ticketState.tickets.length === 0 ? (
        <View style={styles.emptyContainer}>
          <EmptyCard onPress={onAddFlightPressed} />
        </View>
      ) : (
        ticketState.tickets.map((item, index) => {
          return (
            <TicketItem
              key={index}
              airlineCompany={item.airlineCompany}
              arrivalCity={item.arrivalCity}
              arrivalDate={item.arrivalDate}
              arrivalHour={item.arrivalHour}
              badgeText={item.badgeText}
              departureCity={item.departureCity}
              departureDate={item.departureDate}
              departureHour={item.departureHour}
              flightNumber={item.flightNumber}
            />
          );
        })
      )}
    </Background>
  );
};

export default Dashboard;
