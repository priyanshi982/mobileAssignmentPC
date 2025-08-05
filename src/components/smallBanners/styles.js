import { StyleSheet } from 'react-native';
import { getDeviceWidth, rgbWhiteColor } from '../../helper/commonLogic';
import { COLOR_BLACK, WHITE_50, WHITE_75 } from '../../helper/constants';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 117,
    borderRadius: 15,
    width: getDeviceWidth() * 0.5 - 20,
    flexDirection: 'row',
  },
  optionContainer: {
    backgroundColor: COLOR_BLACK,
    borderRadius: 12,
    width: getDeviceWidth() * 0.5 - 20,
    borderColor: rgbWhiteColor(0.1),
    borderWidth: 1,
    marginTop: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  flatList: {
    marginTop: 20,
    marginLeft: 12,
    width: getDeviceWidth() - 24,
    overflow: 'visible',
  },
  flatListContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperHeading: {
    color: WHITE_50,
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginTop: 4,
  },
  heading: {
    color: WHITE_75,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'SF-Medium',
    marginTop: 8,
  },
  subHeading: {
    color: WHITE_50,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginTop: 8,
  },
  headingBold: {
    color: WHITE_75,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SF-Medium',
  },
  headingContainer: {
    width: '80%',
  },
  textContainer: {
    margin: 12,
  },
  txtContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    width: 60,
    alignItems: 'flex-end',
    position: 'absolute',
    right: -10,
    top: 4,
    transform: [{ rotate: '12deg' }],
  },
  columnWrapperStyle: { justifyContent: 'space-between' },
  contentContainerStyle: { padding: 10, marginHorizontal: 5 },
  containerstyle: {
    alignSelf: 'flex-end',
  },
  depositHead: {
    color: rgbWhiteColor(0.9),
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
  },
  depositSubHead: {
    color: rgbWhiteColor(0.5),
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginTop: 8,
  },
  fundingTextStyle: {
    color: rgbWhiteColor(0.9),
    fontSize: 22,
    fontWeight: '500',
    fontFamily: 'SF-Medium',
    marginTop: 20,
    marginHorizontal: 18,
  },
});

export default styles;
