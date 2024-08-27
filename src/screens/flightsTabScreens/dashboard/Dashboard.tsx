import React from 'react';
import Background from '../../../components/background';
import EmptyCard from './components/emptyCard';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {addTicket} from '../../../redux/reducers/ticket/ticketSlice';
import TicketItem from './components/ticketItem';
import {generateTicket} from '../../../utils/helpers/ticketHelpers';
import generalStyles from '../../../styles/generalStyles';

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
        <ScrollView
          style={styles.filledContainer}
          showsVerticalScrollIndicator={false}>
          {ticketState.tickets.map((item, index) => {
            return (
              <View style={generalStyles.blankBetweenContainer} key={index}>
                <TicketItem
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
              </View>
            );
          })}
        </ScrollView>
      )}
    </Background>
  );
};

export default Dashboard;
