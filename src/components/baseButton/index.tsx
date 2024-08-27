import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import typography from '../../styles/typography';

type BaseButtonProps = {
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  buttonStyle,
  onPress,
  text,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[typography.body_semibold, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
