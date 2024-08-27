import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

export default StyleSheet.create({
  buttonStyle: {
    width: 24,
    height: 24,
  },
  container: {
    backgroundColor: Colors.White,
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleColor: {
    color: Colors.Gray900,
  },
});
