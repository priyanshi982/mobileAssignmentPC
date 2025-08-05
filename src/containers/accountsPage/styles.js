import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK,
  GREY_BLACK,
  SF_MEDIUM,
  SF_SEMIBOLD,
} from '../../helper/constants';
import { getDeviceWidth, rgbWhiteColor } from '../../helper/commonLogic';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GREY_BLACK,
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  headingConatiner: {
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 24,
    alignItems: 'center',
  },
  headingTextStyle: {
    color: rgbWhiteColor(0.9),
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  containerStyle: {
    height: 152,
  },
  mainContainerStyle: {
    marginTop: 6,
  },
  sheetContent: {
    backgroundColor: COLOR_BLACK,
    paddingVertical: 20,
  },
  sheetHeading: {
    color: rgbWhiteColor(0.9),
    paddingHorizontal: 20,
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginVertical: 10,
  },
  sheetSubHeading: {
    color: rgbWhiteColor(0.65),
    paddingHorizontal: 20,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  iconContainerStyle: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: -16,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    position: 'absolute',
    left: 16,
  },
  headTxtStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  btnStyle: {
    width: getDeviceWidth() - 32,
    backgroundColor: '#7E59CA',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    alignSelf: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: SF_SEMIBOLD,
  },
  subHead: {
    color: rgbWhiteColor(0.45),
    fontSize: 12,
    fontWeight: '500',
    fontFamily: SF_MEDIUM,
    marginTop: 20,
    marginHorizontal: 16,
  },
});

export default styles;
