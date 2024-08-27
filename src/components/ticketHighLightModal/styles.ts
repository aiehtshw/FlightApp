import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonStyle: {
    marginTop: 16,
    backgroundColor: Colors.Red50,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  textStyle: {
    color: Colors.Red900,
    textAlign: 'center',
  },
});
