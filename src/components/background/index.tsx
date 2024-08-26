import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';

type BackgroundProps = {
  children: React.ReactNode;
};

const Background: React.FC<BackgroundProps> = ({children}) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default Background;
