import {StyleSheet} from 'react-native';
import {Colors} from '../../../../../utils/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: Colors.Gray200,
    height: 151,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    gap: 16,
  },
  companyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  companyContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyContainerRight: {
    backgroundColor: Colors.Orange50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: Colors.Orange200,
    borderWidth: 0.5,
    borderRadius: 7,
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.Orange700,
  },
  flightNumberText: {
    color: Colors.Gray500,
    marginLeft: 8,
  },
  flightInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flightCityInformation: {
    gap: 8,
  },
  iconPartContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  flightDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotLine: {
    borderStyle: 'dashed',
    position: 'absolute',
    borderColor: Colors.Gray200,
    borderBottomWidth: 1,
    left: 8,
    right: 8,
  },
  flightDateText: {
    color: Colors.Gray500,
    marginLeft: 4,
  },
  leftCardCircle: {
    borderWidth: 0.5,
    height: 16,
    width: 8,
    borderColor: Colors.Gray200,
    backgroundColor: Colors.White,
    borderLeftWidth: 0,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    marginLeft: -1,
  },
  rightCardCircle: {
    borderWidth: 0.5,
    borderColor: Colors.Gray200,
    backgroundColor: Colors.White,
    height: 16,
    marginRight: -1,
    width: 8,
    borderRightWidth: 0,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
  },
  borderLeft: {
    height: '100%',
    borderColor: Colors.Gray200,
    justifyContent: 'center',
  },
  borderRight: {
    height: '100%',
    borderColor: Colors.Gray200,
    justifyContent: 'center',
  },
});
