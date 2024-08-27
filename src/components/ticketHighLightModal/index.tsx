import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import TicketItem from '../../screens/flightsTabScreens/dashboard/components/ticketItem';
import {deleteTicket} from '../../redux/reducers/ticket/ticketSlice';
import BaseButton from '../baseButton';
import {LocalizedString} from '../../utils/languages';
import styles from './styles';
import typography from '../../styles/typography';
import {closeModal} from '../../redux/reducers/ticket/ticketModalSlice';
import {BlurView} from '@react-native-community/blur';
import {showMessage} from 'react-native-flash-message';

const TicketHighLightModal = () => {
  const ticketModalState = useAppSelector(state => state.ticketModal);
  const dispatch = useAppDispatch();
  const onDeleteFlightPressed = () => {
    dispatch(deleteTicket(ticketModalState.ticketInfo.flightNumber));
    dispatch(closeModal());
    showMessage({
      icon: 'success',
      description: 'Başarılı',
      message: `${ticketModalState.ticketInfo.flightNumber} Uçuşu Başarıyla Silindi.`,
      type: 'success',
    });
  };
  const closeModalWithOverlay = () => {
    dispatch(closeModal());
  };
  return (
    <Modal
      transparent={true}
      visible={ticketModalState.isVisible}
      animationType="fade">
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPress={closeModalWithOverlay}>
        <TicketItem
          airlineCompany={ticketModalState.ticketInfo.airlineCompany}
          arrivalCity={ticketModalState.ticketInfo.arrivalCity}
          arrivalDate={ticketModalState.ticketInfo.arrivalDate}
          arrivalHour={ticketModalState.ticketInfo.arrivalHour}
          badgeText={ticketModalState.ticketInfo.badgeText}
          departureCity={ticketModalState.ticketInfo.departureCity}
          departureDate={ticketModalState.ticketInfo.departureDate}
          departureHour={ticketModalState.ticketInfo.departureHour}
          flightNumber={ticketModalState.ticketInfo.flightNumber}
        />
        <BaseButton
          textStyle={[typography.body_semibold, styles.textStyle]}
          buttonStyle={styles.buttonStyle}
          onPress={onDeleteFlightPressed}
          text={LocalizedString.removeFlight}
        />
      </TouchableOpacity>
    </Modal>
  );
};

export default TicketHighLightModal;
