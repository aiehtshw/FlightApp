import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {ActivePlaneIcon} from '../../../../../assets';
import {LocalizedString} from '../../../../../utils/languages';
import BaseButton from '../../../../../components/baseButton';
import typography from '../../../../../styles/typography';

type EmptyCardProps = {
  onPress: () => void;
};

const EmptyCard: React.FC<EmptyCardProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <ActivePlaneIcon />
      <Text style={typography.title_2_bold}>
        {LocalizedString.noFlightsAdded}
      </Text>
      <Text style={typography.body_regular}>
        {LocalizedString.letsGetStarted}
      </Text>
      <BaseButton
        onPress={onPress}
        text={LocalizedString.addFlight}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
      />
    </View>
  );
};

export default EmptyCard;
