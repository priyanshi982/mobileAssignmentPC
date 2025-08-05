import { StyleSheet } from 'react-native';
import { rgbWhiteColor } from '../../helper/commonLogic';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: rgbWhiteColor(0.25),
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    width: '90%',
    alignSelf: 'center',
    height: 39,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    marginLeft: 8,
    color: rgbWhiteColor(0.25),
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
});

export default styles;
