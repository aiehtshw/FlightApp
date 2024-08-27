import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import typography from '../../../styles/typography';
import styles from './styles';
import {PlusIcon} from '../../../assets';
import {useAppDispatch} from '../../../redux/store';
import {addTicket} from '../../../redux/reducers/ticket/ticketSlice';
import {generateTicket} from '../../../utils/helpers/ticketHelpers';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  const dispatch = useAppDispatch();

  const onAddFlightPressed = () => {
    dispatch(addTicket(generateTicket()));
  };

  return (
    <View style={styles.container}>
      <Text style={[typography.large_title_bold, styles.titleColor]}>
        {title}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={onAddFlightPressed}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};
export default CustomHeader;
