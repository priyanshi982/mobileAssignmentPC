import { StyleSheet } from 'react-native';
import { rgbBlackColor } from '../../helper/commonLogic';

const styles = StyleSheet.create({
  wrapperstyle: {
    backgroundColor: '#0E0E0ED9',
  },
  draggableIconStyle: {
    width: 106,
    height: 4,
    backgroundColor: '#9070D140',
    borderRadius: 2,
  },
  containerStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 'auto',
    paddingBottom: 20,
    backgroundColor: rgbBlackColor(1),
  },
});

export default styles;
