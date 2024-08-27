import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {TicketInterface} from '../../../../../redux/reducers/ticket/ticketInterfaces';
import {
  LandingIcon,
  PlaneCardIcon,
  TakeOffIcon,
  TurkishAirlinesIcon,
} from '../../../../../assets';
import typography from '../../../../../styles/typography';
import {Colors} from '../../../../../utils/colors';
import {useAppDispatch} from '../../../../../redux/store';
import {openModal} from '../../../../../redux/reducers/ticket/ticketModalSlice';
import {deleteTicket} from '../../../../../redux/reducers/ticket/ticketSlice';

const TicketItem: React.FC<TicketInterface> = ({
  arrivalHour,
  arrivalCity,
  arrivalDate,
  departureDate,
  departureCity,
  departureHour,
  badgeText,
  flightNumber,
  airlineCompany,
}) => {
  const dispatch = useAppDispatch();
  const onTicketItemPressed = () => {
    dispatch(
      openModal({
        ticketInfo: {
          arrivalHour: arrivalHour,
          arrivalCity: arrivalCity,
          arrivalDate: arrivalDate,
          departureDate: departureDate,
          departureCity: departureCity,
          departureHour: departureHour,
          badgeText: badgeText,
          flightNumber: flightNumber,
          airlineCompany: airlineCompany,
        },
      }),
    );
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onTicketItemPressed}>
      <View style={styles.borderLeft}>
        <View style={styles.leftCardCircle} />
      </View>
      <View style={styles.content}>
        <View style={styles.companyContainer}>
          <View style={styles.companyContainerLeft}>
            <TurkishAirlinesIcon />
            <Text
              style={[typography.footnote_semibold, styles.flightNumberText]}>
              TK 00001 • Turkish Airlines
            </Text>
          </View>
          <View style={styles.companyContainerRight}>
            <Text style={[typography.caption_1_medium, styles.badgeText]}>
              9h 50m
            </Text>
          </View>
        </View>
        <View style={styles.flightInformation}>
          <View style={styles.flightCityInformation}>
            <View style={styles.flightDate}>
              <TakeOffIcon />
              <Text
                style={[typography.footnote_regular, styles.flightDateText]}>
                18 Apr 2024
              </Text>
            </View>
            <Text
              style={[typography.title_3_semibold, {color: Colors.Gray900}]}>
              Istanbul
            </Text>
            <Text
              style={[typography.footnote_semibold, {color: Colors.Gray700}]}>
              08:00 AM
            </Text>
          </View>
          <View style={styles.iconPartContainer}>
            <View style={styles.dotLine} />
            <View style={styles.iconContainer}>
              <PlaneCardIcon />
            </View>
          </View>
          <View style={styles.flightCityInformation}>
            <View style={styles.flightDate}>
              <LandingIcon />
              <Text
                style={[typography.footnote_regular, styles.flightDateText]}>
                18 Apr 2024
              </Text>
            </View>
            <Text
              style={[
                typography.title_3_semibold,
                {color: Colors.Gray900, textAlign: 'right'},
              ]}>
              Istanbul
            </Text>
            <Text
              style={[
                typography.footnote_semibold,
                {color: Colors.Gray700, textAlign: 'right'},
              ]}>
              08:00 AM
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.borderRight}>
        <View style={styles.rightCardCircle} />
      </View>
    </TouchableOpacity>
  );
};

export default TicketItem;
