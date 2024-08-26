import React from 'react';
import {Text, View} from 'react-native';
import typography from '../../../styles/typography';
import styles from './styles';
import {PlusIcon} from '../../../assets';

type CustomHeaderProps = {
  title: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={[typography.large_title_bold, styles.titleColor]}>
        {title}
      </Text>
      <PlusIcon />
    </View>
  );
};
export default CustomHeader;
