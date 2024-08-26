import React from 'react';
import {Text, View} from 'react-native';
import {LocalizedString} from '../../../utils/languages';
import generalStyles from '../../../styles/generalStyles';

const Me = () => {
  return (
    <View style={generalStyles.emptyPageContainer}>
      <Text>{LocalizedString.emptyPage}</Text>
    </View>
  );
};

export default Me;
