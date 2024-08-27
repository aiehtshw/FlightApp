import React from 'react';
import {View} from 'react-native';
import styles from './styles';

type BackgroundProps = {
  children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Background;
