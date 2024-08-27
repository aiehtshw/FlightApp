import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {TicketInterface} from '../../../../../redux/reducers/ticket/ticketInterfaces';
import {
  LandingIcon,
  PassivePlaneIcon, PlaneCardIcon,
  TakeOffIcon,
  TurkishAirlinesIcon,
} from '../../../../../assets';
import typography from '../../../../../styles/typography';
import {Colors} from '../../../../../utils/colors';

const TicketItem: React.FC<TicketInterface> = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default TicketItem;
