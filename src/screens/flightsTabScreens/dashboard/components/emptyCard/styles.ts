import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../utils/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 10,
  },
  buttonStyle: {
    backgroundColor: Colors.Orange600,
  },
  buttonTextStyle: {
    textAlign: 'center',
    letterSpacing: 0,
    color: Colors.White,
  },
});
